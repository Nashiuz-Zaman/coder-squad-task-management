'use client';

// react
import { useCallback } from 'react';

// redux
import { useDispatch } from 'react-redux';
import { setProfileData } from '@/lib/redux/features/auth/authSlice';

const useDataAndToken = () => {
   const dispatch = useDispatch();

   const getDataSetToken = useCallback(
      res => {
         dispatch(setProfileData(res.data.user));
         localStorage.setItem('token', res.data.token);
         localStorage.setItem('email', res.data.user.email);
      },
      [dispatch]
   );

   const removeDataAndToken = useCallback(() => {
      dispatch(setProfileData(null));
      localStorage.removeItem('token');
      localStorage.removeItem('email');
   }, [dispatch]);

   return { getDataSetToken, removeDataAndToken };
};

export default useDataAndToken;
