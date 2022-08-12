import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {},
  fonts: {},
  fontSizes: {},
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1600px",
    "3xl": "1920px",
  },
});

const theme = extendTheme({ customTheme });

export default customTheme;
