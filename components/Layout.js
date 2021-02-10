import { Box } from "@chakra-ui/react";
import Head from 'next/head';
import { BASE_PATH } from "../constants";
import Header from './Header';
import Footer from './Footer';
import SiteContainer from './SiteContainer';

export default function Layout({ children, pageTitle, ...props }) {
  const defaultTitle = "Tommy Rosario, Seasoned Frontend Developer";
  const title = pageTitle ? `${pageTitle} : ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${BASE_PATH}/memoji.png`} />
        <title>{title}</title>
      </Head>
      <Header />
      <Box pb={10} pt={5} {...props}>
        <SiteContainer>
          {children}
        </SiteContainer>
      </Box>
      <Footer />
    </>
  );
}
