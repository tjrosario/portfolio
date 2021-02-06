import Layout from '../components/layout';
import { Box, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import { getExperience } from '../services/experience';

export default function Experience({ data }) {
  return (
    <Layout pageTitle="Experience">
      <Heading as="h1" fontWeight="700" fontStyle="italic">Experience</Heading>

      {data.map((experience, idx) =>
        <Box key={idx} my={6}>
          <Heading as="h2" fontSize="2xl">
            {experience.company} / <Box as="span" fontWeight="300" fontStyle="italic">{experience.title}</Box>
          </Heading>

          <Box>
            {experience.date},
            <Box as="span" color="gray.500" ml={2}>{experience.location}</Box>
          </Box>

          <Box mx={5}>
            <UnorderedList my={2}>
              {experience.description.map((text, idx) =>
                <ListItem key={idx}>{text}</ListItem>
              )}
            </UnorderedList>

            <Stack isInline>
              <Heading as="h3" fontSize="large">Technologies:</Heading>
              <Text>{experience.technology}</Text>
            </Stack>
          </Box>


        </Box>
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = await getExperience();

  return {
    props: {
      data
    }
  }
}