import Link from 'next/link'
import { Grid, GridItem, Heading, Text, VisuallyHidden } from "@chakra-ui/react"
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <VisuallyHidden>
        <Heading as="h1">Tommy Rosario</Heading>
      </VisuallyHidden>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <GridBox link="/about">
          <Heading as="h2" size="lg" fontWeight="700" fontStyle="italic">About Me</Heading>
          <Text>Lorem ipsum</Text>
        </GridBox>
        <GridBox link="/work">
          <Heading as="h2" size="lg" fontWeight="700" fontStyle="italic">Work Samples</Heading>
          <Text>Lorem ipsum</Text>
        </GridBox>
        <GridBox link="/skills">
          <Heading as="h2" size="lg" fontWeight="700" fontStyle="italic">Skills</Heading>
          <Text>Lorem ipsum</Text>
        </GridBox>
        <GridBox link="/experience">
          <Heading as="h2" size="lg" fontWeight="700" fontStyle="italic">Experience</Heading>
          <Text>Lorem ipsum</Text>
        </GridBox>
      </Grid>
    </Layout>
  )
}

function GridBox({ children, link, ...props }) {
  return (
    <GridItem bgColor="gray.200" borderRadius={10} p={5} textAlign="center" {...props}>
      <Link href={link}><a>{children}</a></Link>
    </GridItem>
  )
}
