'use client';

// react
import { useEffect } from 'react';

// hooks
import useAxios from './useAxios';

// redux
import useRedux from './useRedux';
import {
   setTotalTasks,
   setIsLoading,
} from '@/lib/redux/features/task/taskSlice';

const useGetInitialTasksData = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { axiosSecure } = useAxios();

   useEffect(() => {
      const getInitialTasks = async email => {
         dispatch(setIsLoading(true));

         const res = await axiosSecure.get(`/tasks?email=${email}`);

         if (res.data.status === 'success') {
            dispatch(setTotalTasks(res.data.tasks));
         }

         dispatch(setIsLoading(false));
      };

      if (profileData?.email) {
         getInitialTasks(profileData.email);
      }
   }, [profileData, dispatch, axiosSecure]);
};

export default useGetInitialTasksData;
