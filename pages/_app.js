import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import { Global } from '@emotion/react';
// import fonts from '../styles/fonts';
import '@fontsource/dm-serif-text';
import '@fontsource/kalam'; // Supports weights 200-800
import '@fontsource-variable/manrope';

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 500,
      },
      variants: {
        lead: {
          color: 'gray.700',
          fontFamily: `'DM Serif Text', serif`,
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: 'md',
      },
    },
  },
  fonts: {
    body: `'Manrope Variable', sans-serif`,
    heading: `'Kalam', cursive`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Global styles={fonts} /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
