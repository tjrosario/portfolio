import Layout from '../components/Layout';
import { Heading, Text } from '../components/shared';
import { getAbout } from '../services/about';

export default function About({ data }) {
  return (
    <Layout pageTitle={'About'}>
      <Heading as={'h1'} fontSize={['5xl', null, '7xl']}>
        About Me
      </Heading>

      {data.map((text, idx) => (
        <Text key={idx}>{text}</Text>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAbout();

  return {
    props: {
      data,
    },
  };
}
