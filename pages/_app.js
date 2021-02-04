import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react"
import fonts from "../styles/fonts";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
