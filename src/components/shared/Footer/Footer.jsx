// react
import PropTypes from 'prop-types';

// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import BrandLogo from '@/components/shared/BrandLogo/BrandLogo';
import LinkList from '@/components/shared/LinkList/LinkList';
import SocialMedia from '../SocialMedia/SocialMedia';

// data
import { footerOptions, currentYear } from '../../../uiData/footerData';

const Footer = () => {
   return (
      <footer className='bg-blackLight pt-sectionGapSm md:pt-sectionGapMd pb-16 relative'>
         <InnerContainer>
            <div className='mb-14 grid grid-cols-1 md:grid-cols-3'>
               {/* website logo */}
               <BrandLogo
                  theme='dark'
                  modifyClasses='mx-auto mb-sectionGapSm lg:h-[3rem]'
               />

               {/* links */}
               <div className='justify-self-center mb-14 text-center md:text-left'>
                  <LinkList linksData={footerOptions} />
               </div>

               {/* social media */}
               <div className='justify-self-center'>
                  {/* social media icons */}
                  <SocialMedia />
               </div>
            </div>

            {/* copyright part */}
            <div className='text-center'>
               <small className='text-white 2xl:text-lg'>
                  &copy; {currentYear} Task Manager Inc. All rights reserved
               </small>
            </div>
         </InnerContainer>
      </footer>
   );
};

Footer.propTypes = {
   addressData: PropTypes.object,
};

export default Footer;
