import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { getAbout } from '../services/about';

export default function About({ data }) {
  return (
    <Layout pageTitle={'About'}>
      <Heading
        as={'h1'}
        fontSize={'7xl'}
      >About Me
      </Heading>

      {data.map((text, idx) => (
        <Text
          key={idx}
          mt={5}
        >{text}
        </Text>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAbout();

  return {
    props: {
      data
    }
  };
}
