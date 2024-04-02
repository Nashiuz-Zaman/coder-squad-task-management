'use client';

// react
import { useCallback } from 'react';

// redux
import { useDispatch } from 'react-redux';
import {
   setTaskCreateFormOpen,
   setTaskEditFormOpen,
} from '@/lib/redux/features/form/formSlice';
import { setBackdropOpen } from '@/lib/redux/features/backdrop/backdropSlice';
import { setShowTaskDetailsPanel } from '@/lib/redux/features/task/taskSlice';

const useFormVisiblity = () => {
   const dispatch = useDispatch();

   const openTaskCreateForm = useCallback(() => {
      dispatch(setTaskCreateFormOpen(true));
   }, [dispatch]);

   const closeTaskCreateForm = useCallback(() => {
      dispatch(setTaskCreateFormOpen(false));
   }, [dispatch]);

   const openTaskEditForm = useCallback(() => {
      dispatch(setTaskEditFormOpen(true));
      dispatch(setBackdropOpen(true));
   }, [dispatch]);

   const closeTaskEditForm = useCallback(() => {
      dispatch(setTaskEditFormOpen(false));
      dispatch(setBackdropOpen(false));
   }, [dispatch]);

   const openTaskDetailsPanel = useCallback(
      (withBackdrop = true) => {
         dispatch(setShowTaskDetailsPanel(true));

         if (withBackdrop) {
            dispatch(setBackdropOpen(true));
         }
      },
      [dispatch]
   );

   const closeTaskDetailsPanel = useCallback(
      (withBackdrop = true) => {
         dispatch(setShowTaskDetailsPanel(false));

         if (withBackdrop) {
            dispatch(setBackdropOpen(false));
         }
      },
      [dispatch]
   );

   return {
      openTaskCreateForm,
      closeTaskCreateForm,
      openTaskEditForm,
      closeTaskEditForm,
      openTaskDetailsPanel,
      closeTaskDetailsPanel,
   };
};

export default useFormVisiblity;
