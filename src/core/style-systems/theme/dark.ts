import themeTypes from '@libraries/defined-style-system/types/theme';
import neutral from './neutral';

const theme: themeTypes = {
  main: {
    bg: '#131313',
    fg: '#242424',
    bd: '#303030',
    'bd-x': '#303030',
    50: '#2E2E2F',
    100: '#444546',
    200: '#595B5D',
    300: '#6F7274',
    400: '#85888B',
    500: '#9B9EA3',
    600: '#B1B5BA',
    700: '#C6CBD1',
    800: '#DCE1E8',
    900: '#F2F8FF'
  },
  neutral,
  primary: {
    50: '#FFFBE6',
    100: '#FFF7CD',
    200: '#FFEF9B',
    300: '#FFE669',
    400: '#FFDE37',
    500: '#FFD605',
    600: '#CCAB04',
    700: '#998003',
    800: '#665602',
    900: '#332B01'
  },
  success: {
    50: '#E5F9EB',
    100: '#CCF4D7',
    200: '#99E9AF',
    300: '#66DD88',
    400: '#33D260',
    500: '#00C738',
    600: '#009F2D',
    700: '#007722',
    800: '#005016',
    900: '#00280B'
  },
  danger: {
    50: '#FEEAEA',
    100: '#FDD5D5',
    200: '#FBABAB',
    300: '#F98282',
    400: '#F75858',
    500: '#F52E2E',
    600: '#C42525',
    700: '#931C1C',
    800: '#621212',
    900: '#310909'
  },
  info: {
    50: '#E5F6FF',
    100: '#CCECFF',
    200: '#99D9FF',
    300: '#66C7FF',
    400: '#33B4FF',
    500: '#00A1FF',
    600: '#0081CC',
    700: '#006199',
    800: '#004066',
    900: '#002033'
  }
};

export default theme;
