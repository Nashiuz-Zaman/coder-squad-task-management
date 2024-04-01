'use client';

// next
import { useRouter } from 'next/navigation';

// hooks
import useAxios from './useAxios';
import useDataAndToken from './useDataAndToken';

// redux
import { useDispatch } from 'react-redux';
import {
   setRegistrationErrors,
   setRegistrationLoading,
} from '@/lib/redux/features/auth/authSlice';

// utils
import { showToast } from '@/utils/toastify';

// custom hook body starts here
const useRegistration = () => {
   // initial data and function extractions
   const router = useRouter();
   const dispatch = useDispatch();
   const { axiosPublic } = useAxios();
   const { getDataSetToken } = useDataAndToken();

   // registration password validation
   const validatePassword = password => {
      const passwordErrors = [];

      const capitalLetterRegExp = /[A-Z]/;
      const specialCharsRegExp = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;

      if (password.length < 6) {
         passwordErrors.push('Passwords must be 6 characters');
      }

      if (!capitalLetterRegExp.test(password)) {
         passwordErrors.push('Passwords must contain a capital letter');
      }

      if (!specialCharsRegExp.test(password)) {
         passwordErrors.push('Passwords must contain a special character');
      }

      return passwordErrors;
   };

   const validateInputs = inputs => {
      const { username, email, password } = inputs;
      const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

      const foundErrors = [];

      if (username === '') {
         foundErrors.push('Must provide an username');
      }

      if (email === '') {
         foundErrors.push('Must provide an email address');
      } else if (!emailRegex.test(email)) {
         foundErrors.push('Must provide a valid email address');
      }

      if (password === '') {
         foundErrors.push('Must provide a password');
      } else {
         foundErrors.push(...validatePassword(password));
      }

      return foundErrors;
   };

   // function to run when the form is submitted
   const handleSignup = async e => {
      e.preventDefault();
      // reset errors
      dispatch(setRegistrationErrors([]));

      // get form
      const form = e.target;
      const username = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      const userData = {
         username,
         email,
         password,
      };

      const foundErrors = validateInputs(userData);

      // if there are erros return from here
      if (foundErrors.length > 0) {
         dispatch(setRegistrationErrors(foundErrors));
         return;
      }

      // if there are no errors continure from here
      try {
         dispatch(setRegistrationLoading(true));
         const userExistsResponse = await axiosPublic.post(
            '/users/check-user',
            {
               email: userData.email,
            }
         );

         // if user exists
         if (userExistsResponse.data.userExists) {
            dispatch(setRegistrationErrors(['User already exists!']));
         }

         // if user is new proceed with signup
         else {
            const user = {
               name: userData.username,
               password: userData.password,
               email: userData.email,
            };

            // create user in database
            const userCreationResponse = await axiosPublic.post('/users', user);

            // if success
            if (userCreationResponse?.data?.status === 'success') {
               getDataSetToken(userCreationResponse);

               // redirect to homepage
               router.push('/');
               showToast('Logged In Successfully', 'success');
            }
         }
      } catch (error) {
         // if error
         dispatch(setRegistrationErrors([error.message]));
      } finally {
         // finally always do this
         dispatch(setRegistrationLoading(false));
      }
   };

   return {
      handleSignup,
   };
};

export default useRegistration;
