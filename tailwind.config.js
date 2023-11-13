/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '25px',
          xl: '40px'
        }
      },
      colors: {
        primary: {
          10: '#313A54',
          20: '#38548B',
          30: '#3670C7',
          40: '#6386D1',
          50: '#869DDA',
          60: '#A6B4E4',
          70: '#C4CDED',
          80: '#D9E8FF'
        },
        secondary: {
          10: '#533425',
          20: '#854627',
          30: '#B95826',
          40: '#EF6A23',
          50: '#F98950',
          60: '#FFA77B',
          70: '#FFC4A6',
          80: '#FFE1D2'
        },
        tertiary: {
          10: '#222222',
          20: '#3D3D3D',
          30: '#595959',
          40: '#787878',
          50: '#989898',
          60: '#B9B9B9',
          70: '#DCDCDC',
          80: '#FFFFFF'
        }
      }
    },
    screens: {
      sm: '640px',

      md: '1024px',

      lg: '1280px',

      xl: '1440px'
    },
    fontFamily: {
      notoTC: ['Noto Sans TC', 'sans-serif'],
    }
  },
  plugins: []
}
