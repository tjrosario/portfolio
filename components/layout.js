import { Container, Heading, Stack } from "@chakra-ui/react"
import Head from 'next/head';
import Link from 'next/link'
import { BASE_PATH } from "../constants";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";


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
              <a><Image src={`${BASE_PATH}/memoji.png`} alt="Tommy Rosario Memoji" /></a>
            </Link>

            <Box flex="1">
              <Heading as="h6" fontSize="6xl" fontStyle="italic">Tommy Rosario</Heading>
              <Text fontSize="2xl">Seasoned Frontend Developer</Text>
            </Box>
          </Flex>
        </Box>

        {children}

        <Box as="footer" textAlign="center" py={10}>
          <Box >
            <Heading as="h6" fontSize="sm" fontStyle="italic" my={3}>Built with:</Heading>

            <Stack isInline alignItems="center" justifyContent="center" spacing={5}>
              <a href="https://reactjs.org/" target="_blank">
                <FaReact color="#61dafb" fontSize="22px" />
              </a>
              <a href="https://chakra-ui.com/" target="_blank">
                <Image src={`${BASE_PATH}/chakra-ui.png`} alt="Chakra UI" height={22} />
              </a>
              <a href="https://nextjs.org/" target="_blank">
                <Image src={`${BASE_PATH}/nextjs.png`} alt="NextJS" height={22} />
              </a>
            </Stack>

          </Box>
        </Box>
      </Container>
    </>
  );
}
