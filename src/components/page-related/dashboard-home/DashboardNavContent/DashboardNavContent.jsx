'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

// hook
import { useDashboardMobileNav } from '@/hooks';

// components
import {
   DashboardNavHeading,
   DashboardNavLink,
} from '@/components/page-related/dashboard-home';

// redux
import { useSelector } from 'react-redux';

const DashboardNavContent = ({ modifyClasses = '' }) => {
   const { profileData } = useSelector(store => store.auth);
   const { closeDashboardMobileNav } = useDashboardMobileNav();

   const primaryOptions = [
      {
         text: 'Home',
         icon: <Icon icon='icon-park-solid:home' />,
         url: '/',
      },
      {
         text: 'Manage Tasks',
         icon: <Icon icon='fluent:tasks-app-20-filled' />,
         url: `/manage-tasks?id=${profileData?._id}`,
      },
   ];

   return (
      <div className={`space-y-3 md:space-y-6 ${modifyClasses}`}>
         {/* dashboard pages */}
         <div>
            <DashboardNavHeading text='Menu' modifyClasses='mb-2 md:mb-6' />

            {/* the navigation menu */}
            <ul className='space-y-3'>
               {primaryOptions.map((option, i) => {
                  return (
                     <li key={i} className='ml-4'>
                        <DashboardNavLink
                           onClickFunction={() => closeDashboardMobileNav()}
                           linkData={option}
                        />
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

DashboardNavContent.propTypes = {
   modifyClasses: PropTypes.string,
};

export default DashboardNavContent;
