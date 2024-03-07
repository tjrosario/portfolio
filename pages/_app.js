import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
// import fonts from '../styles/fonts';
import '@fontsource-variable/nunito';
import '@fontsource/dm-serif-text';

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 500,
      },
      variants: {
        lead: {
          color: 'gray.600',
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: 'lg',
      },
    },
  },
  fonts: {
    body: `'Nunito Variable', sans-serif`,
    heading: `'DM Serif Text', serif`,
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
