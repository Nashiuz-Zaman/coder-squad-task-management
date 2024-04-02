'use client';

// write imports
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   totalTasks: [],
   taskToEdit: null,
   taskDetails: null,
   isLoading: true,
   showTaskDetailsPanel: false,
   taskCreateErrors: [],
   taskEditErrors: [],
};

const taskSlice = createSlice({
   name: 'task',
   initialState,
   reducers: {
      setTotalTasks: (state, { payload }) => {
         state.totalTasks = payload;
      },
      setTaskToEdit: (state, { payload }) => {
         state.taskToEdit = payload;
      },
      setTaskDetails: (state, { payload }) => {
         state.taskDetails = state.totalTasks.find(
            task => task._id === payload
         );
      },
      setShowTaskDetailsPanel: (state, { payload }) => {
         state.showTaskDetailsPanel = payload;
      },
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload;
      },
      setTaskCreateErrors: (state, { payload }) => {
         state.taskCreateErrors = payload;
      },
      setTaskEditErrors: (state, { payload }) => {
         state.taskEditErrors = payload;
      },
   },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const {
   setTotalTasks,
   setIsLoading,
   setTaskToEdit,
   setTaskDetails,
   setShowTaskDetailsPanel,
   setTaskCreateErrors,
   setTaskEditErrors,
} = actions;
