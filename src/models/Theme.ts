export default interface Theme {
  readonly palette: {
    main: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  readonly typography: {
    title: {
      fontSize: string;
      fontWeight: number;
    };
    description: {
      fontSize: string;
      lineHeight: number;
    };
    button: {
      fontSize: string;
    };
    caption: {
      fontSize: string;
    };
  };
}
