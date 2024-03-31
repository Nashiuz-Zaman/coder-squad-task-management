// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import BannerText from '@/components/page-related/home/Banner/BannerText/BannerText';

// data
import { homeBannerContent } from '@/uiData/homeUiContent';

const Banner = () => {
   // extract heading and subheading
   const { backgroundImg } = homeBannerContent;

   return (
      <div className='w-full h-full md:relative md:aspect-video xl:aspect-[16/8]'>
         <div
            style={{
               backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.2)), url(${backgroundImg})`,
            }}
            className='aspect-[16/13] xs:aspect-[16/11] sm:aspect-video md:aspect-auto bg-center bg-cover bg-no-repeat mb-4 sm:mb-6 md:mb-0 md:absolute md:top-0 md:left-0 md:w-full md:h-full'
         ></div>

         {/* banner text part */}
         <InnerContainer modifyClasses='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:!p-0 md:w-[38rem] lg:left-0 lg:translate-x-12 lg:w-[31rem] xl:w-[35rem] 2xl:w-[36rem] 3xl:w-[45.5rem]'>
            <BannerText modifyClasses='md:px-4 md:py-5 2xl:p-6 3xl:p-8 bg-white md:bg-[rgba(255,255,255,0.8)] md:rounded-xl 2xl:rounded-2xl' />
         </InnerContainer>
      </div>
   );
};

export default Banner;
