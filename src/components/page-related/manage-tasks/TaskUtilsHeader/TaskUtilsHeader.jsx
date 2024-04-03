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
         className={`bg-white py-2 md:py-4 px-4 md:px-8 border-b border-neutral-200 ${modifyClasses}`}
      >
         <AddBtn
            onClickFunction={openTaskCreateForm}
            text='Create Task'
            modifyClasses='!bg-primary !border-primary hover:!bg-primaryLight hover:!border-primaryLight !text-white !rounded-xl'
         />
      </div>
   );
};

TaskUtilsHeader.propTypes = {
   modifyClasses: PropTypes.string,
};

export default TaskUtilsHeader;
