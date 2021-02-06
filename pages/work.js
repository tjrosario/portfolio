import Layout from '../components/layout';
import { Heading, Text } from "@chakra-ui/react"
import { getWork } from '../services/work';

export default function Work({ data }) {

  return (
    <Layout pageTitle="Work Samples">
      <Heading as="h1" fontWeight="700" fontStyle="italic">Work Samples</Heading>

    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = await getWork();

  return {
    props: {
      data
    }
  }
}
