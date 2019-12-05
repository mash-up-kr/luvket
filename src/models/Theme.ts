export default interface Theme {
  readonly palette: {
    gray: {
      100: string;
      500: string;
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
  };
}
