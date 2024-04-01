'use client';

// react
import PropTypes from 'prop-types';

// components
import { LinkBtn } from '@/components/buttons';

const BannerTextBtns = ({ modifyClasses = '' }) => {
   return (
      <div
         className={`flex flex-col xs:flex-row gap-4 xs:gap-3 justify-center items-center lg:justify-start lg:gap-3 ${modifyClasses}`}
      >
         <LinkBtn
            text="Learn More"
            url='#learn-more'
            modifyClasses='!duration-[300ms]'
         />

         <LinkBtn
            text="Sign Up - It's Free!"
            url='/register'
            colorTheme='darkOutlined'
            modifyClasses='!duration-[300ms]'
         />
      </div>
   );
};

BannerTextBtns.propTypes = {
   modifyClasses: PropTypes.string,
};

export default BannerTextBtns;
