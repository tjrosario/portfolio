import { Container } from "@chakra-ui/react"
import Head from 'next/head';
import { BASE_PATH } from "../constants";

import Header from './header';
import Footer from './footer';

export default function Layout({ children, pageTitle }) {
  const defaultTitle = "Tommy Rosario, Seasoned Frontend Developer";
  const title = pageTitle ? `${pageTitle} : ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${BASE_PATH}/memoji.png`} />
        <title>{title}</title>
      </Head>
      <Container maxWidth="5xl" py={3}>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
}
