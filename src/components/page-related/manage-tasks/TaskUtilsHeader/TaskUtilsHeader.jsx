'use client';

// react
import PropTypes from 'prop-types';

// components
import { AddBtn } from '@/components/buttons';

// hook
import { useFormVisiblity } from '@/hooks';

const TaskUtilsHeader = ({ modifyClasses = '' }) => {
   const { openTaskCreateForm } = useFormVisiblity();

   return (
      <div
         className={`grid grid-cols-1 xs:grid-cols-[1fr_max-content] gap-2 md:gap-4 items-center bg-white py-2 md:py-4 px-4 md:px-8 border-b border-neutral-200 ${modifyClasses}`}
      >
         {/* add, filter, search */}
         <div className='flex items-center'>
            <AddBtn
               onClickFunction={openTaskCreateForm}
               text='Create Task'
               modifyClasses='!bg-primary !border-primary hover:!bg-primaryLight hover:!border-primaryLight !text-white !rounded-xl'
            />
         </div>
      </div>
   );
};

TaskUtilsHeader.propTypes = {
   modifyClasses: PropTypes.string,
};

export default TaskUtilsHeader;
