import Layout from '../components/Layout';
import { Badge, Box, Heading, HStack, VStack } from '../components/shared';
import { getSkills } from '../services/skills';

export default function Skills({ data = [] }) {
  return (
    <Layout pageTitle={'Skills'}>
      <Heading as={'h1'} fontSize={['5xl', null, '7xl']} variant="lead">
        Skills
      </Heading>

      <VStack alignItems={'stretch'}>
        {data.map((skill, idx) => (
          <Box key={idx}>
            <Heading as={'h2'} fontSize={'2xl'} mt={5} variant="lead">
              {skill.name}
            </Heading>

            {skill.areas &&
              skill.areas.map((area, jdx) => (
                <Box key={jdx} ml={5}>
                  <Heading as={'h3'} fontSize={'larger'} mt={3}>
                    {area.name}
                  </Heading>
                  {area.items && <SkillsList items={area.items} />}
                </Box>
              ))}

            {skill.items && <SkillsList items={skill.items} />}
          </Box>
        ))}
      </VStack>
    </Layout>
  );
}

function SkillsList({ items }) {
  return (
    <HStack
      direction={['column', 'row']}
      flexWrap={'wrap'}
      gap={3}
      spacing={0}
      mb={5}
      mt={3}
    >
      {items.map((item) => (
        <Badge key={item} px={2} py={1}>
          {item}
        </Badge>
      ))}
    </HStack>
  );
}

export async function getStaticProps(context) {
  const { data } = await getSkills();

  return {
    props: {
      data,
    },
  };
}
