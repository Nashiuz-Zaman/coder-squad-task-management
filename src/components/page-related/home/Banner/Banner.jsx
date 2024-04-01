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
         <InnerContainer modifyClasses='md:absolute md:top-0 md:left-0 md:w-full md:h-full md:flex md:items-center md:justify-center lg:justify-start'>
            <BannerText modifyClasses='md:px-4 md:py-5 2xl:p-6 3xl:p-8 md:w-[38rem] lg:w-[31rem] xl:w-[35rem] 2xl:w-[36rem] 3xl:w-[45.5rem]  md:rounded-xl 2xl:rounded-2xl lg:animate-fadeInFromLeft' />
         </InnerContainer>
      </div>
   ); 
};

export default Banner;
