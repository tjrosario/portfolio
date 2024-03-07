import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import { Global } from '@emotion/react';
// import fonts from '../styles/fonts';
import '@fontsource/dm-serif-text';
import '@fontsource/kalam';
import '@fontsource-variable/manrope';
import '@fontsource/indie-flower';

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
        signature: {
          fontFamily: `'Indie Flower', cursive`,
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
