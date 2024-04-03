'use client';

// react
import { useEffect, useState } from 'react';

// components
import { StatusSpecificTasks } from '@/components/page-related/manage-tasks';
import { PaginationBtns } from './../../../buttons';
import { LoadingSpinner } from '@/components/shared';

// hooks
import { usePagination, useTaskDatabaseMethods, useRedux } from '@/hooks';

// redux
import {
   setInitialFetch,
   setIsLoading,
   setRefetch,
} from '@/lib/redux/features/task/taskSlice';

// data
import { statusOptions } from '@/uiData/formsUiData';

const AllTasks = () => {
   const { useSelector, dispatch } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { totalTasks, isLoading, refetch, initialFetch } = useSelector(
      store => store.task
   );
   const [curStatus, setCurStatus] = useState(0);
   const taskLimit = 6;
   const { curPage, setCurPage, pageCount, setPageCount, limit, skip } =
      usePagination(taskLimit);
   const { getTasks } = useTaskDatabaseMethods();

   useEffect(() => {
      const fetchData = async () => {
         const { count } = await getTasks(
            profileData.email,
            curStatus,
            limit,
            skip
         );
         setPageCount(Math.ceil(count / taskLimit));
         dispatch(setIsLoading(false));
      };

      // this will run for the first time
      if (initialFetch && profileData?.email) {
         fetchData();
         dispatch(setInitialFetch(false));
      }

      // this will run if we need to refetch data to update
      if (refetch && profileData?.email) {
         fetchData();
         dispatch(setRefetch(false));
      }
   }, [
      getTasks,
      curStatus,
      limit,
      skip,
      profileData,
      setPageCount,
      dispatch,
      initialFetch,
      refetch,
   ]);

   useEffect(() => {
      // when leaving the page, use the cleanup method to set the initial fetch to true again
      return () => {
         setCurPage(1);
         setCurStatus(0);
         dispatch(setInitialFetch(true));
      };
   }, [dispatch, setCurPage]);

   return (
      <section>
         {/* task status options */}
         <div className='py-6 px-4 md:px-8 border-b border-neutral-200 flex items-center justify-center md:justify-start gap-4 mb-6'>
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
                        dispatch(setRefetch(true));
                     }}
                     key={status.id}
                  >
                     {status.text}
                  </button>
               );
            })}
         </div>

         <div className='mx-4 md:mx-8 space-y-6'>
            {/* if loading */}
            {isLoading && (
               <LoadingSpinner
                  text='Loading Data'
                  textSizeClass='!text-3xl'
                  loaderSizeClass='!text-4xl'
                  modifyClasses='min-h-[59vh] flex items-center justify-center'
               />
            )}

            {/* tasks data */}
            {!isLoading && (
               <StatusSpecificTasks
                  tasksData={{ status: curStatus, tasks: totalTasks }}
               />
            )}

            {/* pagination buttons */}
            {!isLoading && pageCount && (
               <PaginationBtns
                  pageCount={pageCount}
                  curPage={curPage}
                  setCurPage={setCurPage}
                  refetch={() => {
                     dispatch(setRefetch(true));
                  }}
               />
            )}
         </div>
      </section>
   );
};

export default AllTasks;
