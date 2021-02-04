import Head from 'next/head';
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <GridBox>
          <Heading as="h2" size="lg">About Me</Heading>
          <Text>Lorem ipsum</Text>
        </GridBox>
        <GridBox>
          <Heading as="h2" size="lg">Work Samples</Heading>
        </GridBox>
        <GridBox>
          <Heading as="h2" size="lg">Skills</Heading>
        </GridBox>
        <GridBox>
          <Heading as="h2" size="lg">Experience</Heading>
        </GridBox>
      </Grid>

    </Layout>
  )
}

function GridBox({ children, ...props }) {
  return (
    <GridItem bgColor="gray.200" borderRadius={10} p={5} textAlign="center" {...props}>
      {children}
    </GridItem>
  )
}
