'use client';

// next
import { useRouter } from 'next/navigation';

//  hook
import useAxios from './useAxios';
import useDataAndToken from './useDataAndToken';

// redux
import useRedux from './useRedux';
import {  
   setLoginErrors,
   setLoginLoading,
} from '@/lib/redux/features/auth/authSlice';

// utils
import { showToast } from '@/utils/toastify';

const useLogin = () => {
   const router = useRouter();
   const { dispatch } = useRedux();
   const { axiosPublic } = useAxios();
   const { getDataSetToken, removeDataAndToken } = useDataAndToken();

   const validateInputs = inputs => {
      const { email, password } = inputs;
      const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

      const foundErrors = [];

      if (email === '') {
         foundErrors.push('Must provide an email address');
      } else if (!emailRegex.test(email)) {
         foundErrors.push('Must provide a valid email address');
      }

      if (password === '') {
         foundErrors.push('Must provide a password');
      }

      return foundErrors;
   };

   // handle normal login
   const handleLoginEmail = async e => {
      e.preventDefault();

      // reset errors
      dispatch(setLoginErrors([]));

      // get form
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      const userData = {
         email,
         password,
      };

      const foundErrors = validateInputs(userData);

      // if there are erros return from here
      if (foundErrors.length > 0) {
         dispatch(setLoginErrors(foundErrors));
         return;
      }

      try {
         dispatch(setLoginLoading(true));

         const loginResponse = await axiosPublic.post('/email-login', {
            email: userData?.email,
            password: userData?.password,
         });

         if (loginResponse?.data?.status === 'failed') {
            dispatch(setLoginErrors([loginResponse.data.message]));
         }

         if (loginResponse?.data?.status === 'success') {
            getDataSetToken(loginResponse);
            router.push('/');
            showToast('Logged In Successfully', 'success');
         }
      } catch (error) {
         // if error
         dispatch(setLoginErrors([error.message]));
      } finally {
         // finally always do this
         dispatch(setLoginLoading(false));
      }
   };

   const handleLogout = async (manual = true) => {
      router.push('/')
      const logoutRes = await axiosPublic.patch('/logout', {
         email: localStorage.getItem('email'),
      });

      if (logoutRes.data.status === 'success') {
         removeDataAndToken();

         if (manual) {
            showToast('Signed Out Successfully', 'success');
         }

         if (!manual) {
            showToast('You Were Signed Out, Please Sign In Again', 'error');
         }
      }
   };

   return {
      handleLoginEmail,
      handleLogout,
   };
};

export default useLogin;
