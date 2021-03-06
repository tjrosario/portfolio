import Layout from '../components/Layout';
import { Box, Center, Divider, Heading, ListItem, Stack, Text, UnorderedList } from '../components/shared';
import { getExperience } from '../services/experience';

export default function Experience({ data }) {
  return (
    <Layout pageTitle={'Experience'}>
      <Heading
        as={'h1'}
        fontSize={['5xl', null, '7xl']}
      >Experience
      </Heading>

      {data.map((experience, idx) => (
        <Box
          key={idx}
          my={6}
        >
          <Heading
            as={'h2'}
            fontSize={'2xl'}
          >
            {experience.company} / {' '}
            <Box
              as={'span'}
              fontWeight={'300'}
            >{experience.title}
            </Box>
          </Heading>

          <Box>
            {experience.date},
            <Box
              as={'span'}
              color={'gray.500'}
              ml={2}
            >{experience.location}
            </Box>
          </Box>

          <Box mx={5}>
            <UnorderedList my={2}>
              {experience.description.map((text, jdx) => <ListItem key={jdx}>{text}</ListItem>)}
            </UnorderedList>

            <Stack direction={['column', null, 'row']}>
              <Heading
                as={'h3'}
                fontSize={'large'}
              >Technologies:
              </Heading>
              <Text>{experience.technology}</Text>
            </Stack>
          </Box>

          {idx < data.length - 1
            && (
              <Center my={[5, null, 10]}>
                <Divider borderColor={'gray.400'} />
              </Center>
            )}
        </Box>
      ))}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = await getExperience();

  return {
    props: {
      data
    }
  };
}
