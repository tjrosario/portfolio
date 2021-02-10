import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react"
import fonts from "../styles/fonts";

const theme = extendTheme({
  fonts: {
    heading: "'Palanquin', serif",
    body: "'Poppins', sans-serif",
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
