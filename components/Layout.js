import Head from 'next/head';
import { BASE_PATH } from '../constants';
import Footer from './Footer';
import Header from './Header';
import { Box } from './shared';
import SiteContainer from './SiteContainer';

export default function Layout({ children, pageTitle, ...props }) {
  const defaultTitle = 'Tommy Rosario, Seasoned Frontend Developer';
  const title = pageTitle ? `${pageTitle} : ${defaultTitle}` : defaultTitle;
  const description = 'Tommy Rosario, Seasoned Frontend Developer';
  const url = 'http://tommyrosario.me/';
  const image = 'https://tommyrosario.me/img/memoji.png';

  return (
    <>
      <Head>
        <meta
          name={'robots'}
          content={'index, follow'}
        />
        <meta
          name={'keywords'}
          content={'frontend, developer, software, engineering, html, css, javascript, react, angular, website'}
        />
        <meta
          name={'description'}
          content={description}
        />

        <meta
          name={'author'}
          content={'Tommy Rosario'}
        />

        <meta
          name={'copyright'}
          content={'Copyright Tommy Rosario'}
        />

        {/* Open Graph / Facebook */}
        <meta
          property={'og:type'}
          content={'website'}
        />
        <meta
          property={'og:url'}
          content={url}
        />
        <meta
          property={'og:title'}
          content={title}
        />
        <meta
          property={'og:description'}
          content={description}
        />
        <meta
          property={'og:image'}
          content={image}
        />

        {/* Twitter */}
        <meta
          property={'twitter:card'}
          content={'summary_large_image'}
        />
        <meta
          property={'twitter:url'}
          content={url}
        />
        <meta
          property={'twitter:title'}
          content={title}
        />
        <meta
          property={'twitter:description'}
          content={description}
        />
        <meta
          property={'twitter:image'}
          content={image}
        />

        <link
          rel={'shortcut icon'}
          href={`${BASE_PATH}/memoji.png`}
        />
        <title>{title}</title>
      </Head>
      <Header />
      <Box
        pb={10}
        pt={5}
        {...props}
      >
        <SiteContainer>
          {children}
        </SiteContainer>
      </Box>
      <Footer />
    </>
  );
}
