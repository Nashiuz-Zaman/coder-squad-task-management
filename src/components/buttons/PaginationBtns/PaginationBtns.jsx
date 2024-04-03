// react
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PaginationBtns = ({
   pageCount,
   curPage,
   setCurPage,
   refetch,
   modifyClasses = '',
}) => {
   const [buttons, setButtons] = useState([]);

   const textColor = 'text-neutral-600';

   const numberedBtnClasses =
      'text-sm lg:text-lg xl:text-xl 2xl:text-2xl min-w-[2rem] lg:min-w-[2.5rem] xl:min-w-[3rem] aspect-square rounded-full flex justify-center items-center transition-all duration-default';

   const normalBtnClasses = `border ${textColor} bg-neutral-200 hover:bg-primary hover:border-primary hover:text-white`;

   const selectedBtnClasses = 'bg-primaryLight text-white border-primaryLight';

   const textBtnClasses = `text-lg ${textColor} font-medium w-max rounded-full flex justify-center items-center hover:text-primary transition-all duration-150`;

   useEffect(() => {
      if (pageCount) {
         const buttonsArr = [];

         for (let i = 1; i <= pageCount; i++) {
            const button = { value: i };
            buttonsArr.push(button);
         }
         setButtons(buttonsArr);
      }
   }, [pageCount, setButtons]);

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <div
         className={`flex items-center gap-2 justify-center animate-fadeIn ${modifyClasses}`}
      >
         {curPage > 1 && (
            <button
               title={`Go to page ${curPage - 1}`}
               className={`${textBtnClasses} mr-3`}
               onClick={() => {
                  setCurPage(curPage - 1);
                  refetch();
                  scrollToTop();
               }}
            >
               Prev
            </button>
         )}

         {buttons.length > 0 &&
            buttons.map((button, i, arr) => {
               if (arr.length > 3) {
                  if (
                     button.value > curPage - 2 &&
                     button.value < curPage + 2
                  ) {
                     return (
                        <button
                           title={`Go to page ${button.value}`}
                           className={`${numberedBtnClasses} ${
                              button.value === curPage
                                 ? selectedBtnClasses
                                 : normalBtnClasses
                           }`}
                           key={button.value}
                           onClick={() => {
                              setCurPage(button.value);
                              refetch();
                              scrollToTop();
                           }}
                        >
                           {button.value}
                        </button>
                     );
                  }
               } else {
                  return (
                     <button
                        title={`Go to page ${button.value}`}
                        className={`${numberedBtnClasses} ${
                           button.value === curPage
                              ? selectedBtnClasses
                              : normalBtnClasses
                        }`}
                        key={button.value}
                        onClick={() => {
                           setCurPage(button.value);
                           refetch();
                           scrollToTop();
                        }}
                     >
                        {button.value}
                     </button>
                  );
               }
            })}

         {curPage !== pageCount && (
            <button
               title={`Go to page ${curPage + 1}`}
               className={`${textBtnClasses} ml-3`}
               onClick={() => {
                  setCurPage(curPage + 1);
                  refetch();
                  scrollToTop();
               }}
            >
               Next
            </button>
         )}
      </div>
   );
};

PaginationBtns.propTypes = {
   pageCount: PropTypes.number,
   setCurPage: PropTypes.func,
   curPage: PropTypes.number,
   refetch: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default PaginationBtns;
