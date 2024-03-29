import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        rockSalt: ['Rock Salt', 'cursive'],
      },
      screens: {
        xs: '325px',
        xsm: '370px',
        sm: '480px',
        csm: '540px',
        csm2: '640px',
        md: '768px',
        cmd: '914px',
        lg: '976px',
        celg: '1046px',
        clg: '1182px',
        xl: '1280px',
        '1xl': '1400px',
      },
      colors: {
        black: {
          1: '#000000',
          2: '#1D1F2C',
          3: '#4A4C56',
        },
        blue: {
          1: '#15B1FE',
          2: '#BFEAFF',
        },
        white: {
          1: '#FFF',
          2: '#DDD',
          3: '#D9D9D9',
        },
        green: {
          1: '#50C878',
        },
      },
    },
  },
  plugins: [],
};
export default config;
