'use client';

// react
import PropTypes from 'prop-types';

// components
import LinkBtn from '@/components/buttons/LinkBtn/LinkBtn';

const BannerTextBtns = ({ modifyClasses = '' }) => {
   return (
      <div
         className={`flex flex-col xs:flex-row gap-4 xs:gap-3 justify-center items-center lg:justify-start lg:gap-3 ${modifyClasses}`}
      >
         <LinkBtn
            text="Let's Explore"
            url='#learn-more'
            modifyClasses='!duration-[300ms]'
         />

         <LinkBtn
            text="Sign Up - It's Free!"
            url='/signup'
            colorTheme='primaryOutlined'
            modifyClasses='!duration-[300ms]'
         />
      </div>
   );
};

BannerTextBtns.propTypes = {
   modifyClasses: PropTypes.string,
};

export default BannerTextBtns;
