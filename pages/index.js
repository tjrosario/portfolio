import { Box, Heading, Text } from "@chakra-ui/react"
import Layout from '../components/Layout';
import { BASE_PATH } from "../constants";

export default function Home() {
  return (
    <Layout 
      alignItems="center"
      backgroundColor="black"
      display="flex"
      height="75vh"
      _after={{
        backgroundImage: `url(${BASE_PATH}/img/beach.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 50%",
        backgroundSize: "cover",
        content: "' '",
        display: "block",
        height: "100%",
        left: 0,
        position: "absolute",
        opacity: 0.25,
        top: 0,
        width: "100%"
      }}
      overflow="hidden"
      position="relative"
    >
      <Box color="white" textAlign="center" position="relative" zIndex="2">
        <Heading as="h1" fontFamily="Palanquin" fontSize={["4xl", "5em", "6em", "8em"]}>Tommy Rosario</Heading>
        <Text color="gray.300" fontSize={["larger", "3xl", "4xl"]} my={3}>Seasoned Frontend Developer</Text>
        <Text>&#60; jerseyShore <Box as="span" fontSize=".85em">&#47;</Box>&gt;</Text>
      </Box>
    </Layout>
  )
}
