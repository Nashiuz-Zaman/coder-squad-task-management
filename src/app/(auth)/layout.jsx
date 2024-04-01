// react
import PropTypes from 'prop-types';

// components

const AuthLayout = ({ children }) => {
   return (
      <div className='max-w-[120rem] mx-auto h-screen grid grid-cols-1 2md:grid-cols-2'>
         <div>idiot</div>
         <div>{children}</div>
      </div>
   );
};

AuthLayout.propTypes = {
   children: PropTypes.any,
};

export default AuthLayout;
