import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {},

  fonts: {
    body: `'Roboto', sans-serif`,
  },

  styles: {
    global: {
      body: {
        bg: "#DDDDDD",
      },
    },
  },
});
