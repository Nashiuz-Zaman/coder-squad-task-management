'use client';

// react
import { useCallback } from 'react';

// hooks
import useAxios from './useAxios';
import useRedux from './useRedux';

// redux
import { setTotalTasks } from '@/lib/redux/features/task/taskSlice';
import { setRefetch } from '@/lib/redux/features/task/taskSlice';

// utils
import { showToast } from '@/utils/toastify';

const useTaskDatabaseMethods = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { axiosSecure } = useAxios();

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
            dispatch(setRefetch(true));
         }
      } catch (error) {
         showToast('Something went wrong. Try again', 'error');
      }
   };

   const editTask = useCallback(
      async (editedTaskId, editedTaskData) => {
         // update in the database
         const res = await axiosSecure.put(
            `/tasks/edit/${editedTaskId}`,
            editedTaskData
         );

         if (res.data.status === 'success') {
            dispatch(setRefetch(true));
            showToast('Task Edited', 'success');
         }
      },
      [dispatch, axiosSecure]
   );

   const deleteTask = useCallback(
      async _id => {
         const res = await axiosSecure.delete(
            `/tasks/delete/${_id}?email=${profileData.email}`
         );

         if (res.data.status === 'success') {
            dispatch(setRefetch(true));
            showToast('Task Deleted', 'success');
         }
      },
      [dispatch, profileData, axiosSecure]
   );

   return {
      deleteTask,
      createTask,
      editTask,
      getTasks,
   };
};

export default useTaskDatabaseMethods;
