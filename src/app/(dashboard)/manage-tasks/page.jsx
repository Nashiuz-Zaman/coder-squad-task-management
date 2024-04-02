// component
import { TaskCreateForm, TaskEditForm } from '@/components/forms';
import {
   TaskUtilsHeader,
   TaskDetailsPanel,
} from '@/components/page-related/manage-tasks';

let ManageTasks = () => {
   return (
      <div className='h-full flex flex-col'>
         {/* make this section's postion relative for the forms below */}
         <section className='mb-8 md:mb-12 lg:mb-14 xl:mb-16 relative'>
            <TaskUtilsHeader />
            <TaskCreateForm />
            <TaskEditForm />
            <TaskDetailsPanel />
         </section>

         <section className='grow overflow-x-auto xl:!overflow-hidden px-4 md:px-8 xl:px-16'></section>
      </div>
   );
};

export default ManageTasks;
