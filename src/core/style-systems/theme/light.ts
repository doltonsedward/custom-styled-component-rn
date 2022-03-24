import themeTypes from '@libraries/defined-style-system/types/theme';
import neutral from './neutral';

const theme: themeTypes = {
  main: {
    bg: '#F9F9F9',
    fg: '#FFFFFF',
    bd: '#E0E0E0',
    'bd-x': '#FFFFFF',
    50: '#E0E1E2',
    100: '#C8C9CA',
    200: '#AFB1B3',
    300: '#97999C',
    400: '#7E8185',
    500: '#65696D',
    600: '#4D5156',
    700: '#34393F',
    800: '#1C2127',
    900: '#030910'
  },
  neutral,
  primary: {
    50: '#FEFAE6',
    100: '#FCF5CD',
    200: '#FAEA9B',
    300: '#F7E069',
    400: '#F5D537',
    500: '#F2CB05',
    600: '#C2A204',
    700: '#917A03',
    800: '#615102',
    900: '#302901'
  },
  success: {
    50: '#E5F8EB',
    100: '#CCF1D6',
    200: '#99E3AE',
    300: '#66D685',
    400: '#33C85D',
    500: '#00BA34',
    600: '#00952A',
    700: '#00701F',
    800: '#004A15',
    900: '#00250A'
  },
  danger: {
    50: '#FDEAEA',
    100: '#FBD5D5',
    200: '#F6ABAB',
    300: '#F28080',
    400: '#ED5656',
    500: '#E92C2C',
    600: '#BA2323',
    700: '#8C1A1A',
    800: '#5D1212',
    900: '#2F0909'
  },
  info: {
    50: '#E5F3FF',
    100: '#CCE6FF',
    200: '#99CEFF',
    300: '#66B5FF',
    400: '#339DFF',
    500: '#0084FF',
    600: '#006ACC',
    700: '#004F99',
    800: '#003566',
    900: '#001A33'
  }
};

export default theme;
