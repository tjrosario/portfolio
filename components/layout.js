import { Container } from "@chakra-ui/react"
import Head from 'next/head';
import { BASE_PATH } from "../constants/app";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${BASE_PATH}/memoji.png`} />
      </Head>
      <Container maxWidth="5xl">
        {children}
      </Container>
    </>
  );
}
