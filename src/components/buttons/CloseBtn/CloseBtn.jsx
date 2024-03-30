// react
import PropTypes from 'prop-types';

// iconify
import { Icon } from '@iconify/react';

const CloseBtn = ({ theme = 'light', onClickFunction, modifyClasses = '' }) => {
  return (
    <button
      title='Close'
      aria-label='Close button'
      className={`ml-auto w-max block text-3xl ${
        theme === 'light' ? 'text-textPrimary' : 'text-white'
      } ${modifyClasses}`}
      onClick={onClickFunction}
    >
      <Icon style={{ fontSize: 'inherit' }} icon='material-symbols:close' />
    </button>
  );
};

CloseBtn.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  modifyClasses: PropTypes.string,
};

export default CloseBtn;
