import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
};
const fonts = {
  body: `'Roboto', sans-serif`,
};

const theme = extendTheme({ breakpoints, fonts });
export default theme;
