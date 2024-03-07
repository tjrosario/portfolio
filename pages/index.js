import { Box, Heading, Text } from '../components/shared';
import Layout from '../components/Layout';
import { BASE_PATH } from '../constants';

export default function Home() {
  return (
    <Layout
      alignItems="center"
      backgroundColor="black"
      display="flex"
      height="75vh"
      _after={{
        content: "' '",
        display: 'block',
        backgroundImage: `url(${BASE_PATH}/img/beach.jpg)`,
        backgroundPosition: '0 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        left: 0,
        opacity: 0.25,
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
      overflow="hidden"
      position="relative"
    >
      <Box
        bg="rgba(0, 0, 0, .5)"
        border="2px solid rgba(255, 255, 255, .2)"
        color="white"
        px={4}
        py={5}
        textAlign="center"
        position="relative"
        zIndex="2"
      >
        <Heading
          as="h1"
          fontSize={['4xl', '5em', '6em', '7em']}
          lineHeight="1"
          variant="signature"
        >
          Tommy Rosario
        </Heading>
        <Text color="gray.300" fontSize={['larger', '3xl', '4xl']} my={3}>
          Seasoned Frontend Developer
        </Text>
        <Text>
          &#60; jerseyShore{' '}
          <Box as="span" fontSize=".85em">
            &#47;
          </Box>
          &gt;
        </Text>
      </Box>
    </Layout>
  );
}
