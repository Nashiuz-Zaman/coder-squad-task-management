// react
import PropTypes from 'prop-types';

// iconify
import { Icon } from '@iconify/react';

const MobileMenuBtn = ({
  openNavFunction,
  theme = 'light',
  modifyClasses = '',
}) => {
  return (
    <button
      aria-label='Open Mobile Navigation'
      className={`inline-block group rounded-md md:rounded-lg xl:rounded-xl transition-all duration-default ${modifyClasses}`}
      onClick={openNavFunction}
    >
      <Icon
        className={`block transition-all duration-default text-[1.4rem] md:text-[2rem] xl:text-[2.8rem] m-1 ${
          theme === 'light'
            ? 'text-textPrimary active:text-primary lg:group-hover:text-primary'
            : 'text-white '
        }`}
        icon='clarity:menu-line'
      />
    </button>
  );
};

MobileMenuBtn.propTypes = {
  openNavFunction: PropTypes.func,
  theme: PropTypes.string,
  modifyClasses: PropTypes.string,
};
export default MobileMenuBtn;
