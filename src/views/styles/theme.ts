import { getDefaultFontSize } from '../../helpers';
import Theme from '../../models/Theme';

const theme: Theme = {
  palette: {
    main: {
      100: '#ffc8ba',
      200: '#ffa38e',
      300: '#ff7e62',
      400: '#ff6040',
      500: '#ff4242',
      600: '#f4391c',
      700: '#e63217',
      800: '#d82912',
      900: '#bf1a09',
    },
    gray: {
      100: '#f7f7f7',
      200: '#e1e1e1',
      300: '#cecece',
      400: '#a9a9a9',
      500: '#888888',
      600: '#616161',
      700: '#4e4e4e',
      800: '#303030',
      900: '#101010',
    },
  },
  typography: {
    pxToRem: (px: number): string => `${px / getDefaultFontSize()}rem`,
    title: {
      fontSize: '20px',
      fontWeight: 700,
    },
    description: {
      fontSize: '14px',
      lineHeight: 1.6,
    },
    button: {
      fontSize: '14px',
    },
    caption: {
      fontSize: '12px',
    },
  },
};

export default theme;
