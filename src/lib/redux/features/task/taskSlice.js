'use client';

// write imports
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   totalTasks: [],
   statusSpecificTasks: null,
   curCategory: 'todo',
   curPage: 1,
   pageCount: 1,
   taskToEdit: null,
   taskDetails: null,
   isLoading: true,
   showTaskDetailsPanel: false,
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
      setStatusSpecificTasks: (state, { payload }) => {
         state.statusSpecificTasks = payload;
      },
      setShowTaskDetailsPanel: (state, { payload }) => {
         state.showTaskDetailsPanel = payload;
      },
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload;
      },
      setCurCategory: (state, { payload }) => {
         state.curCategory = payload;
      },
      setCurPage: (state, { payload }) => {
         state.curPage = payload;
      },
   },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const {
   setTotalTasks,
   setStatusSpecificTasks,
   setIsLoading,
   setTaskToEdit,
   setTaskDetails,
   setShowTaskDetailsPanel,
   setCurCategory,
   setCurPage,
} = actions;
