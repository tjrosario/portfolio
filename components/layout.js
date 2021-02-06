import { Container, Heading } from "@chakra-ui/react"
import Head from 'next/head';
import Link from 'next/link'
import { BASE_PATH } from "../constants";
import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function Layout({ children, pageTitle }) {
  const defaultTitle = "Tommy Rosario, Seasoned Frontend Developer";
  const title = pageTitle ? `${pageTitle} : ${defaultTitle}` : defaultTitle;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${BASE_PATH}/memoji.png`} />
        <title>{title}</title>
      </Head>
      <Container maxWidth="5xl">
        <Box as="header">
          <Flex alignItems="center">
            <Link href={'/'}>
              <a><Image src={`${BASE_PATH}/memoji.png`} alt="Tommy Rosario Memoji" maxWidth="200px" /></a>
            </Link>

            <Box flex="1">
              <Heading as="h6" fontSize="6xl" fontStyle="italic">Tommy Rosario</Heading>
              <Text fontSize="2xl">Seasoned Frontend Developer</Text>
            </Box>
          </Flex>
        </Box>
        {children}
      </Container>
    </>
  );
}
