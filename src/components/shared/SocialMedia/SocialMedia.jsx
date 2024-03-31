'use client';

// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

// iconify
import { Icon } from '@iconify/react';

const SocialMedia = ({ text = 'Follow Us', modifyClasses }) => {
   // common classes
   const socialLinksClasses =
      'text-4xl text-white hover:text-primary transition-all duration-150 cursor-pointer';

   return (
      <div>
         <h2 className='text-xl text-center md:text-left text-white mb-3 2xl:text-3xl font'>
            {text}
         </h2>

         <div
            className={`text-white text-2xl flex items-center gap-4 ${modifyClasses}`}
         >
            <Link
               className={socialLinksClasses}
               href='https://www.facebook.com'
            >
               <Icon icon='ic:baseline-facebook' />
            </Link>

            <Link className={socialLinksClasses} href='https://www.twitter.com'>
               <Icon icon='prime:twitter' />
            </Link>

            <Link
               className={socialLinksClasses}
               href='https://www.instagram.com'
            >
               <Icon icon='ri:instagram-line' />
            </Link>
         </div>
      </div>
   );
};

SocialMedia.propTypes = {
   text: PropTypes.any,
   modifyClasses: PropTypes.string,
};

export default SocialMedia;
