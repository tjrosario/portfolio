import Link from 'next/link'
import { Grid, GridItem, Heading, Text, VisuallyHidden } from "@chakra-ui/react"
import Layout from '../components/Layout';
import { SITE_MENU } from '../constants';

export default function Home() {
  return (
    <Layout>
      <VisuallyHidden>
        <Heading as="h1">Tommy Rosario</Heading>
      </VisuallyHidden>
      <Grid templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]} gap={[5, 10]}>
        {SITE_MENU.map((menuItem, idx) =>
          <GridItem bgColor="gray.200" borderRadius="lg" key={idx} p={5} textAlign="center">
            <Link href={menuItem.value}>
              <a><Heading as="h2" size="lg" fontWeight="700" fontStyle="italic">{menuItem.label}</Heading></a>
            </Link>
            <Text>{menuItem.text}</Text>
          </GridItem>
        )}
      </Grid>
    </Layout>
  )
}
