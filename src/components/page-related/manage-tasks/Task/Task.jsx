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
} from '@/components/buttons';
import { PriorityCard, TimeRemainingCard } from '@/components/shared';

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
   const { dispatch } = useRedux();
   const { deleteTask, editTask } = useTaskDatabaseMethods();

   const { openTaskEditForm, openTaskDetailsPanel } = useFormVisiblity();
   const { _id, title, statusLevel, deadline, priorityLevel } = taskData;
   const deadlineStr = getDayMonthNameYearStr(deadline);

   return (
      <div
         className={`bg-white border border-neutral-200 shadow-sm rounded-lg p-3 pb-4 text-lg grid grid-cols-2 animate-fadeIn`}
      >
         <div>
            {/* priority card */}
            <PriorityCard
               priorityLevel={priorityLevel}
               modifyClasses='mb-3 md:mb-4'
            />

            {/* title */}
            <h4
               title='Task Title'
               className='font-bold text-base md:text-lg mb-2 !leading-none'
            >
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

         <div className='h-full flex flex-col'>
            <div className='flex items-start justify-end gap-2'>
               <ViewDetailsBtn
                  onClickFunction={() => {
                     dispatch(setTaskDetails(taskData?._id));
                     openTaskDetailsPanel();
                  }}
               />
               <EditBtn
                  onClickFunction={() => {
                     dispatch(setTaskToEdit(taskData));
                     openTaskEditForm();
                  }}
               />

               {statusLevel !== 0 && (
                  <MoveToTodoBtn
                     onClickFunction={() => {
                        editTask(_id, { statusLevel: 0 });
                     }}
                  />
               )}

               {statusLevel !== 1 && (
                  <MoveToOngoingBtn
                     onClickFunction={() => {
                        editTask(_id, { statusLevel: 1 });
                     }}
                  />
               )}

               {statusLevel !== 2 && (
                  <MoveToCompletedBtn
                     onClickFunction={() => {
                        editTask(_id, { statusLevel: 2 });
                     }}
                  />
               )}

               {/* delete button */}
               <DeleteBtn
                  onClickFunction={() => {
                     deleteTask(_id);
                  }}
               />
            </div>

            {/* time remaining */}
            <TimeRemainingCard
               text=''
               modifyClasses='text-sm font-medium md:text-base 3xl:text-lg  text-neutral-500 w-max ml-auto mt-auto'
               deadline={deadline}
            />
         </div>
      </div>
   );
};

Task.propTypes = {
   taskData: PropTypes.object,
};

export default Task;
