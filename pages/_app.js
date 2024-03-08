import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import { Global } from '@emotion/react';
// import fonts from '../styles/fonts';
import '@fontsource/kalam';
import '@fontsource-variable/manrope';
import '@fontsource/indie-flower';
import '@fontsource-variable/raleway';

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 600,
        textTransform: 'lowercase',
      },
      variants: {
        lead: {
          color: 'gray.700',
        },
        signature: {
          fontWeight: 700,
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
    heading: `'Raleway Variable', sans-serif`,
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
