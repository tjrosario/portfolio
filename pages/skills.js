import Layout from '../components/Layout';
import { Box, Heading, ListItem, UnorderedList } from '../components/shared';
import { getSkills } from '../services/skills';

export default function Skills({ data }) {
  return (
    <Layout pageTitle={'Skills'}>
      <Heading
        as={'h1'}
        fontSize={['5xl', null, '7xl']}
      >Skills
      </Heading>

      {data.map((skill, idx) => (
        <Box key={idx}>
          <Heading
            as={'h2'}
            fontSize={'2xl'}
            mt={5}
          >{skill.name}
          </Heading>

          {skill.areas && skill.areas.map((area, jdx) => (
            <Box
              key={jdx}
              ml={5}
            >
              <Heading
                as={'h3'}
                fontSize={'larger'}
                mt={3}
              >{area.name}
              </Heading>
              {area.items
                && <SkillsList items={area.items} />}
            </Box>
          ))}

          {skill.items
            && <SkillsList items={skill.items} />}
        </Box>
      ))}
    </Layout>
  );
}

function SkillsList({ items }) {
  return (
    <UnorderedList
      listStyleType={'none'}
      ml={0}
      mt={3}
    >
      {items.map((item, idx) => (
        <ListItem
          key={idx}
          mr={3}
          display={['inline-block', null]}
        >{item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export async function getStaticProps(context) {
  const data = await getSkills();

  return {
    props: {
      data
    }
  };
}
