'use client';

// react
import { useCallback } from 'react';

// hooks
import useAxios from './useAxios';
import useRedux from './useRedux';

// redux
import { setTotalTasks } from '@/lib/redux/features/task/taskSlice';

// utils
import { showToast } from '@/utils/toastify';

// data
import { statusOptions } from '@/uiData/formsUiData';

const useTaskDatabaseMethods = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { axiosSecure } = useAxios();

   const sortByLatest = useCallback(arr => {
      const sortedArr = [...arr].sort(
         (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated)
      );

      return sortedArr;
   }, []);

   const getTasks = useCallback(
      async (email, status, limit, skip) => {
         try {
            const res = await axiosSecure.get(
               `/tasks?email=${email}&status=${status}&limit=${limit}&skip=${skip}`
            );

            if (res?.data?.status === 'success') {
               dispatch(setTotalTasks(res.data.tasks));
               return { count: res.data.count };
            }
         } catch (error) {
            showToast('Something went wrong. Try again', 'error');
         }
      },
      [axiosSecure, dispatch]
   );

   const createTask = async newTaskData => {
      try {
         const res = await axiosSecure.post(`/tasks`, newTaskData);
         if (res.data.status === 'success') {
            showToast('Task Added', 'success');
            dispatch(setTotalTasks(res.data.tasks));
         }
      } catch (error) {
         showToast('Something went wrong. Try again', 'error');
      }
   };

   const editTask = useCallback(
      async (editedTaskId, editedTaskData, totalTasks) => {
         // return an updated array with the new data for the edited task only
         const updatedTasksAfterEdit = totalTasks.map(task => {
            if (task._id === editedTaskId) {
               return { ...task, ...editedTaskData };
            }

            return task;
         });

         // set the new array to the total tasks state in redux
         dispatch(setTotalTasks(updatedTasksAfterEdit));

         // update in the database
         const res = await axiosSecure.put(
            `/tasks/edit/${editedTaskId}`,
            editedTaskData
         );

         if (res.data.status === 'success') {
            showToast('Task Edited', 'success');
         }
      },
      [dispatch, axiosSecure]
   );

   const updateTaskStatus = useCallback(
      async (taskId, statusLevel, totalTasks) => {
         // find latest time
         const lastUpdated = new Date().toISOString();
         const statusLevelText = statusOptions[statusLevel].text;

         // create a new array
         const updatedTasksAfterStatusChange = totalTasks.map(task => {
            return task._id === taskId
               ? { ...task, statusLevel, lastUpdated }
               : task;
         });

         // update redux task state with new array
         dispatch(setTotalTasks(sortByLatest(updatedTasksAfterStatusChange)));

         // send the update information to the database
         const updatedTask = {
            statusLevel,
            lastUpdated,
         };

         const res = await axiosSecure.patch(
            `/tasks/update-status/${taskId}`,
            updatedTask
         );

         // show success toast on success
         if (res.data.status === 'success') {
            showToast(`Task moved to ${statusLevelText}`, 'success');
            return true;
         }

         return false;
      },
      [dispatch, sortByLatest, axiosSecure]
   );

   const deleteTask = useCallback(
      async (_id, tasks) => {
         const remainingTasks = tasks.filter(task => task._id !== _id);
         dispatch(setTotalTasks(remainingTasks));

         const res = await axiosSecure.delete(
            `/tasks/delete/${_id}?email=${profileData.email}`
         );

         if (res.data.status === 'success') {
            showToast('Task Deleted', 'success');
         }
      },
      [dispatch, profileData, axiosSecure]
   );

   return {
      sortByLatest,
      updateTaskStatus,
      deleteTask,
      createTask,
      editTask,
      getTasks,
   };
};

export default useTaskDatabaseMethods;
