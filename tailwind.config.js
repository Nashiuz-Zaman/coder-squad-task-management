/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            '2xs': '360px',
            xs: '480px',
            '2md': '850px',
            '3xl': '1700px',
         },
         keyframes: {
            'fade-in': {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
            'fade-in-from-right': {
               '0%': {
                  opacity: '0',
                  position: 'relative',
                  transform: 'translateX(20%)',
               },
               '100%': {
                  opacity: '1',
                  position: 'relative',
                  transform: 'translateX(0)',
               },
            },
            'fade-in-from-left': {
               '0%': {
                  opacity: '0',
                  position: 'relative',
                  transform: 'translateX(-20%)',
               },
               '100%': {
                  opacity: '1',
                  position: 'relative',
                  transform: 'translateX(0)',
               },
            },
         },
         animation: {
            fadeIn: 'fade-in 0.3s ease-out forwards',
            fadeInFromRight: 'fade-in-from-right 0.7s ease-out forwards',
            fadeInFromLeft: 'fade-in-from-left 0.7s ease-out forwards',
         },
         spacing: {
            sectionGapSm: '4.5rem',
            sectionGapMd: '9rem',
            sectionGapLg: '13.5rem',
            sectionGapXl: '18rem',
         },
         boxShadow: {
            large: '0 10px 60px -10px rgba(0,0,0,0.25)',
            medium: '0 5px 40px -5px rgba(0,0,0,0.25)',
            small: '0 7px 20px -10px rgba(0,0,0,0.15)',
         },
         transitionDuration: {
            default: '150ms',
         },
         colors: {
            primary: '#00ced1',
            primaryDark: '#00b9bc',
            primaryLight: '#1ad3d6',
            primaryLightest: '#99d1d1',
            textPrimary: '#1C1B1B',
            textMediumLight: '#1c1b1bcc',
            textLight: '#1c1b1b99',
            lightGray: '#f5f5f5',
            blackLight: '#111',
         },
         borderRadius: {
            default: '5px',
            defaultLg: '10px',
         },
      },
   },
   plugins: [],
};
