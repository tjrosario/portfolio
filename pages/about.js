import Layout from '../components/layout';
import { Heading, Text } from "@chakra-ui/react"
import { getAbout } from '../services/about';

export default function About({ data }) {
  return (
    <Layout pageTitle="About">
      <Heading as="h1" fontWeight="700" fontStyle="italic">About Me</Heading>

      {data.map((text, idx) =>
        <Text key={idx} mt={5}>{text}</Text>  
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = await getAbout();

  return {
    props: {
      data
    }
  }
}
