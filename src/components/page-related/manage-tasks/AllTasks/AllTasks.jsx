'use client';

// react
import { useEffect, useState } from 'react';

// components
import { StatusSpecificTasks } from '@/components/page-related/manage-tasks';

// hooks
import { usePagination, useTaskDatabaseMethods } from '@/hooks';

// redux
import { useSelector } from 'react-redux';

// data
import { statusOptions } from '@/uiData/formsUiData';

const AllTasks = () => {
   const { profileData } = useSelector(store => store.auth);
   const { totalTasks } = useSelector(store => store.task);
   const [curStatus, setCurStatus] = useState(0);
   const taskLimit = 6;
   const { curPage, setCurPage, pageCount, setPageCount, limit, skip } =
      usePagination(taskLimit);
   const { getTasks } = useTaskDatabaseMethods();

   useEffect(() => {
      if (profileData?.email) {
         getTasks(profileData.email, curStatus, limit, skip);
      }
   }, [getTasks, curStatus, limit, skip, profileData]);

   return (
      <section>
         {/* task status options */}
         <div className='py-6 px-4 md:px-8 border-b border-neutral-200 flex items-center justify-center md:justify-start gap-4'>
            {statusOptions?.map(status => {
               return (
                  <button
                     className={`${
                        status.value === curStatus
                           ? 'text-neutral-700 underline'
                           : 'text-neutral-400 no-underline'
                     } underline-offset-[6px] font-medium transition-all duration-300`}
                     onClick={() => {
                        setCurStatus(status.value);
                        setCurPage(1);
                     }}
                     key={status.id}
                  >
                     {status.text}
                  </button>
               );
            })}
         </div>

         {/* tasks data */}
         {totalTasks && <StatusSpecificTasks tasksData={totalTasks} />}
      </section>
   );
};

export default AllTasks;
