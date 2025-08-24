/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        p1: '#2EF2FF',
        p2: '#3C52D9',
        p3: '#C8EA80',
        p4: '#EAEDFF',
        p5: '#C4CBF5',
        s1: '#080D27',
        s2: '#0C1838',
        s3: '#334679',
        s4: '#1959AD',
        s5: '#263466',
        black: {
          DEFAULT: '#000000',
          100: '#05091D',
        },
      },
      boxShadow: {
        100: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
        200: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF',
        300: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
        400: 'inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)',
        500: '0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        borderColor: 'border-color',
      },
      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '3/20': '15%',
        '7/20': '35%',
        '9/20': '45%',
        '11/20': '55%',
        '13/20': '65%',
        '15/20': '75%',
        '17/20': '85%',
        '19/20': '95%',
        22: '88px',
        100: '100px',
        512: '512px',
        330: '330px',
        388: '388px',
        400: '400px',
        440: '440px',
        640: '640px',
        960: '960px',
        1230: '1230px',
      },
      zIndex: {
        1: '1',
        2: '2',
        4: '4',
      },
      lineHeight: {
        12: '48px',
      },
      borderRadius: {
        14: '14px',
        20: '20px',
        40: '40px',
        half: '50%',
        '7xl': '40px',
      },
      flex: {
        50: '0 0 50%',
        320: '1px 0 320px',
        300: '0 0 300px',
        540: '0 0 540px',
        280: '0 0 280px',
        256: '0 0 256px',
        100: '0 0 100%',
      },
      // Custom utility classes from your styles object
      maxWidth: {
        'custom-inner': '1280px', // for innerWidth
      },
      width: {
        'custom-inter': '80%', // for interWidth
      },
      fontSize: {
        'hero-lg': ['144px', { lineHeight: '158.4px' }],
        'hero-md': ['100px', { lineHeight: '114.4px' }],
        'hero-sm': ['60px', { lineHeight: '74.4px' }],
        'hero-base': ['44px', { lineHeight: '64.4px' }],
      },
      // Custom component-like utilities
      padding: {
        'nav-top': '98px',
      },
      borderWidth: {
        '9': '9px',
        '18': '18px',
      },
    },
  },
  plugins: [
    // Plugin untuk menambahkan utility classes custom dari styles object
    function({ addUtilities }) {
      const newUtilities = {
        '.inner-width': {
          '@apply 2xl:max-w-[1280px] w-full': {},
        },
        '.inter-width': {
          '@apply lg:w-[80%] w-[100%]': {},
        },
        '.custom-paddings': {
          '@apply sm:p-16 xs:p-8 px-6 py-12': {},
        },
        '.custom-y-paddings': {
          '@apply sm:py-16 xs:py-8 py-12': {},
        },
        '.custom-x-paddings': {
          '@apply sm:px-16 px-6': {},
        },
        '.custom-top-paddings': {
          '@apply sm:pt-16 xs:pt-8 pt-12': {},
        },
        '.custom-bottom-paddings': {
          '@apply sm:pb-16 xs:pb-8 pb-12': {},
        },
        '.flex-center': {
          '@apply flex justify-center items-center': {},
        },
        '.flex-start': {
          '@apply flex justify-start items-start': {},
        },
        '.flex-end': {
          '@apply flex justify-end': {},
        },
        '.nav-padding': {
          '@apply pt-[98px]': {},
        },
        '.hero-heading': {
          '@apply font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white': {},
        },
        '.hero-d-text': {
          '@apply md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]': {},
        },
      }
      addUtilities(newUtilities)
    }
  ],
};