'use client';

// react imports
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

// component
import { ButtonBtn } from '@/components/buttons';
import { PasswordField, InputField1 } from '@/components/shared';

// hooks
// import useLoginMethods from '@/hooks/useLoginMethods';

// redux
import { useSelector } from 'react-redux';
import { setLoginErrors } from '@/lib/redux/features/auth/authSlice';
import Link from 'next/link';

const LoginForm = ({ modifyClasses = '' }) => {
   const { loginErrors, loginLoading } = useSelector(store => store.auth);
   // const { handleLoginEmail } = useLoginMethods();
   const formEl = useRef();

   return (
      <div
         className={`bg-white mx-auto p-5 md:py-7 2md:px-6 2md:py-12 ${modifyClasses}`}
      >
         {/* heading */}
         <h2 className='capitalize mb-4 text-center text-lg 2md:text-xl xl:text-2xl font-bold'>
            Login to your account
         </h2>

         <form ref={formEl} noValidate onSubmit={null} className='block w-max'>
            <div className='space-y-3 md:space-y-5'>
               {/* email */}
               <InputField1 type='email' name='email' placeholder='Email' />

               {/* password */}
               <div className='space-y-3'>
                  <PasswordField name='password' placeholder='Password' />
               </div>
            </div>

            {/* show errors here */}
            {loginErrors?.length > 0 && (
               <div className='space-y-1 mt-3 md:mt-4'>
                  {loginErrors.map(error => {
                     return (
                        <p
                           key={error}
                           className='text-sm text-center font-semibold text-red-600'
                        >
                           * {error}
                        </p>
                     );
                  })}
               </div>
            )}

            <ButtonBtn
               loading={loginLoading}
               text='Sign In'
               modifyClasses='mx-auto block my-5'
            />

            <p className='text-sm text-center xl:text-base mb-3 md:mb-4'>
               Don&apos;t have an account?{' '}
               <Link href='/register' className='text-primary font-semibold'>
                  Register
               </Link>
            </p>

            <p className='text-center mb-3 md:mb-4'>Or</p>

            <Link
               href='/'
               className='font-semibold hover:text-primary text-center block transition-all duration-default'
            >
               Go Home
            </Link>
         </form>
      </div>
   );
};

LoginForm.propTypes = {
   modifyClasses: PropTypes.string,
};

export default LoginForm;
