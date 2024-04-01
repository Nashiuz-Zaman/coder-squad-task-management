// react
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

// components
import { ButtonBtn } from '@/components/buttons';
import { InputField1, PasswordField } from '@/components/shared';

// hooks
// import useRegistrationForm from '@/hooks/useRegistrationForm';
// import useResetForm from '@/hooks/useResetForm';

// redux
import { useSelector } from 'react-redux';
import { setRegistrationErrors } from '@/lib/redux/features/auth/authSlice';
import Link from 'next/link';

const RegistrationForm = ({ modifyClasses }) => {
   // const { handleSignup } = useRegistrationForm();
   const { registrationErrors, registrationLoading } = useSelector(
      store => store.auth
   );

   // const { resetFormFieldsAndErrors } = useResetForm();

   const formEl = useRef();

   // clear form fields and errors when it disappears
   // useEffect(() => {
   //    if (!registrationFormOpen) {
   //       resetFormFieldsAndErrors(formEl, setRegistrationErrors);
   //    }
   // }, [registrationFormOpen, resetFormFieldsAndErrors]);

   return (
      <div
         className={`bg-white mx-auto p-5 md:py-7 2md:px-6 2md:py-12 ${modifyClasses}`}
      >
         {/* heading */}
         <h2 className='capitalize mb-7 text-center font-bold text-lg 2md:text-xl xl:text-2xl'>
            Sign up. It&apos;s <span className='text-primary'>Free!</span>
         </h2>

         {/* form */}
         <form ref={formEl} noValidate onSubmit={null} className='w-max'>
            <div className='space-y-3 md:space-y-5'>
               {/* username field */}
               <InputField1 name='name' placeholder='Username' />

               {/* email field */}
               <InputField1 type='email' name='email' placeholder='Email' />

               {/* password field */}
               <PasswordField name='password' placeholder='Password' />
            </div>

            {/* show errors here */}
            {registrationErrors?.length > 0 && (
               <div className='space-y-1 mt-4'>
                  {registrationErrors.map(error => {
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
               loading={registrationLoading}
               text='Sign Up'
               modifyClasses='mx-auto block my-5'
            />

            <p className='text-sm text-center xl:text-base mb-3 md:mb-4'>
               Already have an account?{' '}
               <Link href='/login' className='text-primary font-bold'>
                  Log In
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

RegistrationForm.propTypes = {
   modifyClasses: PropTypes.string,
};

export default RegistrationForm;
