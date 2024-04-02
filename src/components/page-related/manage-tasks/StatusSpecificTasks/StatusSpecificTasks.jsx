'use client';

// react
import PropTypes from 'prop-types';

// component
import { Task } from '@/components/page-related/manage-tasks';

// redux
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';

const StatusSpecificTasks = ({ tasksData }) => {
   const { status, tasks } = tasksData;

   const { isLoading } = useSelector(store => store.task);

   return (
      <div
         className={`bg-white overflow-y-hidden h-full rounded-2xl px-3 py-4 drop-target animate-fadeIn border border-neutral-200`}
         // ref collection
      >
         {/* tasks container */}
         <div className={``}>
            {/* if tasks available */}
            {!isLoading && tasks?.length > 0 && (
               <ul className='space-y-3'>
                  {tasks.map(task => {
                     return (
                        <li key={task._id}>
                           <Task taskData={task} />
                        </li>
                     );
                  })}
               </ul>
            )}

            {/* if no task */}
            {!isLoading && tasks?.length < 1 && (
               <div className='flex flex-col gap-3 items-center py-4 px-5 font-medium mt-10 2xs:mt-20 md:mt-28 lg:mt-20 md:text-lg lg:text-xl text-center text-neutral-400 animate-fadeIn'>
                  <Icon
                     className='block text-xl md:text-2xl lg:text-4xl'
                     icon='ph:clock-counter-clockwise-fill'
                  />
                  <span>{`No ${status} Tasks`}</span>{' '}
               </div>
            )}
         </div>
      </div>
   );
};

StatusSpecificTasks.propTypes = {
   tasksData: PropTypes.object,
};

export default StatusSpecificTasks;
