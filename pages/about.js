import Layout from '../components/Layout';
import { Avataaar, Box, Heading, Text } from '../components/shared';
import { getAbout } from '../services/about';

export default function About({ data = [] }) {
  return (
    <Layout pageTitle={'About'}>
      <Heading as={'h1'} fontSize={['5xl', null, '7xl']} variant="lead">
        About Me
      </Heading>

      <Box float={{ lg: 'left' }} textAlign={'center'}>
        <Avataaar
          clotheColor="Heather"
          clotheType="Hoodie"
          eyeType="Wink"
          style={{ margin: 'auto', width: '250px', height: '250px' }}
        />
      </Box>

      {data.map((text, idx) => (
        <Text key={idx}>{text}</Text>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await getAbout();

  return {
    props: {
      data,
    },
  };
}
