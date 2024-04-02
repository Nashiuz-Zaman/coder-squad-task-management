'use client';

// react
import PropTypes from 'prop-types';

// component
import { Task } from '@/components/page-related/manage-tasks';

// redux
import { Icon } from '@iconify/react';

// data
import { statusOptions } from '@/uiData/formsUiData';

const StatusSpecificTasks = ({ tasksData }) => {
   const { status, tasks } = tasksData;

   const statusText = statusOptions[status]?.text;

   return (
      <div className={`min-h-[59vh] lg:min-h-[50vh] flex flex-col p-4 bg-neutral-100`}>
         {/* tasks container */}

         {/* if tasks available */}
         {tasks?.length > 0 && (
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
         {tasks?.length < 1 && (
            <div className='grow flex items-center justify-center'>
               <div className='flex flex-col gap-3 items-center py-4 px-5 font-medium md:text-lg lg:text-xl text-center text-neutral-400 animate-fadeIn'>
                  <Icon
                     className='block text-xl md:text-2xl lg:text-4xl'
                     icon='ph:clock-counter-clockwise-fill'
                  />
                  <span>{`No ${statusText} Tasks Found`}</span>{' '}
               </div>
            </div>
         )}
      </div>
   );
};

StatusSpecificTasks.propTypes = {
   tasksData: PropTypes.object,
};

export default StatusSpecificTasks;
