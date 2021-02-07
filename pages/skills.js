import Layout from '../components/layout';
import { Box, Heading, ListItem, UnorderedList, Text } from "@chakra-ui/react"
import { getSkills } from '../services/skills';

export default function Skills({ data }) {
  return (
    <Layout pageTitle="Skills">
      <Heading as="h1" fontWeight="700" fontStyle="italic">Skills</Heading>

      {data.map((skill, idx) =>
        <Box key={idx}>
          <Heading as="h2" fontSize="2xl" mt={5}>{skill.name}</Heading>

          {skill.areas && skill.areas.map((area, idx) =>
            <Box key={idx} ml={5}>
              <Heading as="h3" fontSize="larger" mt={3}>{area.name}</Heading>
              {area.items &&
                <SkillsList items={area.items} />
              }
            </Box>
          )}

          {skill.items &&
            <SkillsList items={skill.items} />
          }
        </Box>
      )}
    </Layout>
  );
}

function SkillsList({ items }) {
  return (
    <UnorderedList display={["list-item", null, "flex"]} listStyleType="none" my={3} ml={[0, null, 5]}>
      {items.map((item, idx) =>
        <ListItem key={idx} mr={3}>{item}</ListItem>
      )}
    </UnorderedList>
  );
}

export async function getStaticProps(context) {
  const data = await getSkills();

  return {
    props: {
      data
    }
  }
}
