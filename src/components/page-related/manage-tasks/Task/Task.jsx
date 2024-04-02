'use client';

// react
import PropTypes from 'prop-types';

//  icons
import { Icon } from '@iconify/react';

// component
import {
   EditBtn,
   DeleteBtn,
   MoveToOngoingBtn,
   MoveToCompletedBtn,
   MoveToTodoBtn,
   ViewDetailsBtn,
   DotsMenuBtn,
} from '@/components/buttons';
import { MenuPanel, PriorityCard } from '@/components/shared';

// hook
import { useFormVisiblity, useTaskDatabaseMethods, useRedux } from '@/hooks';

// redux
import {
   setTaskToEdit,
   setTaskDetails,
} from '@/lib/redux/features/task/taskSlice';

// utils
import { getDayMonthNameYearStr } from '@/utils/dateTimeMethods';

const Task = ({ taskData }) => {
   // necessary hooks and data extraction
   const { dispatch, useSelector } = useRedux();
   const { totalTasks } = useSelector(store => store.task);
   const { deleteTask, updateTaskStatus } = useTaskDatabaseMethods();

   const { openTaskEditForm, openTaskDetailsPanel } = useFormVisiblity();
   const { _id, title, statusLevel, deadline, priorityLevel } = taskData;
   const deadlineStr = getDayMonthNameYearStr(deadline);

   return (
      <div
         className={`border border-neutral-200 shadow-sm rounded-lg p-3 pb-4 text-lg flex flex-col cursor-grab animate-fadeIn`}
      >
         {/* priority and dot button */}
         <div className='flex items-center justify-between mb-3 md:mb-4'>
            <PriorityCard priorityLevel={priorityLevel} />

            {/* three dotted menu button */}
            <DotsMenuBtn
               modifyClasses='ml-auto mr-2'
               renderChildren={(show, setShow) => {
                  return (
                     <MenuPanel
                        modifyClasses='!text-sm sm:!text-base 2md:!text-lg xl:!text-xl w-max !space-y-2 2md:!space-y-4'
                        show={show}
                        setShow={setShow}
                     >
                        <ViewDetailsBtn
                           onClickFunction={() => {
                              dispatch(setTaskDetails(taskData?._id));
                              openTaskDetailsPanel();
                              setShow(false);
                           }}
                           text='View Details'
                        />
                        <EditBtn
                           onClickFunction={() => {
                              setShow(false);
                              dispatch(setTaskToEdit(taskData));
                              openTaskEditForm();
                           }}
                           text='Edit Task'
                        />

                        {statusLevel !== 0 && (
                           <MoveToTodoBtn
                              onClickFunction={() => {
                                 updateTaskStatus(_id, 0, totalTasks);
                              }}
                              text='Mark as Todo'
                           />
                        )}

                        {statusLevel !== 1 && (
                           <MoveToOngoingBtn
                              onClickFunction={() => {
                                 updateTaskStatus(_id, 1, totalTasks);
                              }}
                              text='Mark as Ongoing'
                           />
                        )}

                        {statusLevel !== 2 && (
                           <MoveToCompletedBtn
                              onClickFunction={() => {
                                 updateTaskStatus(_id, 2, totalTasks);
                              }}
                              text='Mark as Completed'
                           />
                        )}

                        {/* delete button */}
                        <DeleteBtn
                           onClickFunction={() => {
                              deleteTask(_id, totalTasks);
                           }}
                           text='Delete'
                        />
                     </MenuPanel>
                  );
               }}
            />
         </div>

         {/* title */}
         <h4 className='font-bold text-base md:text-lg mb-2 !leading-none'>
            {title}
         </h4>

         {/* deadline */}
         <div title='Deadline' className='flex w-max items-center gap-1'>
            <Icon
               className='text-neutral-500 text-xl'
               icon='ph:calendar-fill'
            />
            <span className='text-neutral-500 font-semibold text-sm !leading-none'>
               {deadlineStr}
            </span>
         </div>
      </div>
   );
};

Task.propTypes = {
   taskData: PropTypes.object,
};

export default Task;
