// react
import PropTypes from 'prop-types';

// component
import BannerTextBtns from '@/components/page-related/home/Banner/BannerTextBtns/BannerTextBtns';

function BannerText({ modifyClasses = '' }) {
   return (
      <div className={`h-max text-center lg:text-left bg-white md:bg-[rgba(255,255,255,0.8)] ${modifyClasses}`}>
         {/* text part */}
         <h1 className='font-bold text-3xl sm:text-4xl md:text-[2.6rem] xl:text-5xl 3xl:text-6xl mb-4 2md:mb-5 !leading-snug'>
            Task Manager: Streamlining Your{' '}
            <span className='text-primary'>Productivity</span>
         </h1>

         <p className='text-lg xl:text-xl 3xl:text-[1.6rem] xs:w-[80%] md:w-[60%] lg:w-full mx-auto mb-5 2md:mb-6 font-medium !leading-snug text-neutral-600'>
            Effortless Task Management for a Seamless Workflow
         </p>

         {/* buttons */}
         <BannerTextBtns />
      </div>
   );
}

BannerText.propTypes = {
   modifyClasses: PropTypes.string,
};

export default BannerText;
