import Theme from '../../models/Theme';

const theme: Theme = {
  palette: {
    gray: {
      100: '#d8d8d8',
      500: 'rgba(60, 60, 67, 0.6)',
    },
  },
  typography: {
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
  },
};

export default theme;
