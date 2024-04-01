'use client';

// react
import { useEffect } from 'react';

// hook
import useAxios from './useAxios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
   setProfileData,
   setUserLoading,
} from '@/lib/redux/features/auth/authSlice';

// utils
import { showToast } from '@/utils/toastify';

const useAuth = () => {
   const dispatch = useDispatch();
   const { profileData } = useSelector(store => store.auth);
   const { axiosSecure } = useAxios();

   useEffect(() => {
      const checkInitialAuth = async () => {
         try {
            // run this at website refresh
            if (!profileData && localStorage?.getItem('token')) {
               const validationRes = await axiosSecure.get('/validate');

               if (validationRes?.data?.status === 'success') {
                  dispatch(setProfileData(validationRes.data.user));
               }
            }
         } catch (error) {
            showToast('Network error', 'error');
         } finally {
            dispatch(setUserLoading(false));
         }
      };

      checkInitialAuth();
   }, [dispatch, axiosSecure, profileData]);
};

export default useAuth;
