// react
import PropTypes from 'prop-types';

// components

const AuthLayout = ({ children }) => {
   return (
      <div className='max-w-[120rem] mx-auto h-screen grid grid-cols-1 2md:grid-cols-2'>
         <div className='hidden h-full bg-gradient-to-r from-primaryLight to-primaryDark 2md:flex 2md:items-center 2md:justify-center'>
            <p className='text-white text-5xl lg:text-6xl 2xl:text-7xl font-bold animate-fadeIn'>Welcome.</p>
         </div>

         {/* page component  */}
         {children}
      </div>
   );
};

AuthLayout.propTypes = {
   children: PropTypes.any,
};

export default AuthLayout;
