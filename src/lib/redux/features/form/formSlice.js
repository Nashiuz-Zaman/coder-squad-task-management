'use client';

// redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   taskCreateFormOpen: false,
   taskEditFormOpen: false,
};

const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      setTaskCreateFormOpen: (state, { payload }) => {
         state.taskCreateFormOpen = payload;
      },
      setTaskEditFormOpen: (state, { payload }) => {
         state.taskEditFormOpen = payload;
      },
   },
});

const { reducer, actions } = formSlice;
export default reducer;
export const { setTaskCreateFormOpen, setTaskEditFormOpen } = actions;
