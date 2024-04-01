'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
   userAlreadyRegistered: false,
   profileData: null,
   userLoading: false,
   loginErrors: [],
   registrationErrors: [],
   passwordResetErrors: [],
   loginLoading: false,
   registrationLoading: false,
   passwordResetLoading: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
     
      setUserAlreadyRegistered: (state, { payload }) => {
         state.userAlreadyRegistered = payload;
      },
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
      setPasswordResetErrors:(state, { payload }) => {
         state.passwordResetErrors = payload;
      },
      setPasswordResetLoading: (state, { payload }) => {
         state.passwordResetLoading = payload;
      },
   },
});

const { reducer, actions } = authSlice;
export default reducer;
export const {
  
   setUserAlreadyRegistered,
   setProfileData,
   setUserLoading,
   setLoginErrors,
   setRegistrationErrors,
   setLoginLoading,
   setRegistrationLoading,
   setPasswordResetLoading,
   setPasswordResetErrors
} = actions;
