// component
import { TaskCreateForm, TaskEditForm } from '@/components/forms';
import {
   TaskUtilsHeader,
   TaskDetailsPanel,
   AllTasks,
} from '@/components/page-related/manage-tasks';

let ManageTasks = () => {
   return (
      <div className='h-full flex flex-col'>
         {/* make this section's postion relative for the forms below */}
         <section className='relative'>
            <TaskUtilsHeader />
            <TaskCreateForm />
            <TaskEditForm />
            <TaskDetailsPanel />
         </section>

         <AllTasks />
      </div>
   );
};

export default ManageTasks;
