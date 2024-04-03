'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   profileData: null,
   userLoading: true,
   loginErrors: [],
   registrationErrors: [],
   loginLoading: false,
   registrationLoading: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setProfileData: (state, { payload }) => {
         state.profileData = payload;
      },
      setUserLoading: (state, { payload }) => {
         state.userLoading = payload;
      },
      setLoginErrors: (state, { payload }) => {
         state.loginErrors = payload;
      },
      setRegistrationErrors: (state, { payload }) => {
         state.registrationErrors = payload;
      },
      setLoginLoading: (state, { payload }) => {
         state.loginLoading = payload;
      },
      setRegistrationLoading: (state, { payload }) => {
         state.registrationLoading = payload;
      },
   },
});

const { reducer, actions } = authSlice;
export default reducer;
export const {
   setProfileData,
   setUserLoading,
   setLoginErrors,
   setRegistrationErrors,
   setLoginLoading,
   setRegistrationLoading,
} = actions;
