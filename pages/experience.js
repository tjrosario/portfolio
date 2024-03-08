import Layout from '../components/Layout';
import {
  Badge,
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  ListItem,
  UnorderedList,
} from '../components/shared';
import { getExperience } from '../services/experience';

export default function Experience({ data = [] }) {
  return (
    <Layout pageTitle={'Experience'}>
      <Heading as={'h1'} fontSize={['5xl', null, '7xl']} variant="lead">
        Experience
      </Heading>

      {data.map((experience, idx) => (
        <Box key={idx} my={6}>
          <Heading as={'h2'} fontSize={'2xl'}>
            {experience.company} /{' '}
            <Box as={'span'} fontWeight={'300'}>
              {experience.title}
            </Box>
          </Heading>

          <Box>
            {experience.date},
            <Box as={'span'} color={'gray.500'} ml={2}>
              {experience.location}
            </Box>
          </Box>

          <Box mt={5}>
            <UnorderedList my={2} spacing={2}>
              {experience.description.map((text, jdx) => (
                <ListItem key={jdx}>{text}</ListItem>
              ))}
            </UnorderedList>

            <HStack
              direction={['column', 'row']}
              alignItems="baseline"
              flexWrap={'wrap'}
              gap={3}
              spacing={0}
              mt={5}
            >
              <Heading as={'h3'} fontSize={'large'}>
                Technologies:
              </Heading>

              <HStack
                direction={['column', 'row']}
                flexWrap={'wrap'}
                gap={3}
                spacing={0}
              >
                {experience.technology.map((tech) => (
                  <Badge key={tech} px={2} py={1}>
                    {tech}
                  </Badge>
                ))}
              </HStack>
            </HStack>
          </Box>

          {idx < data.length - 1 && (
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
  const { data } = await getExperience();

  return {
    props: {
      data,
    },
  };
}
