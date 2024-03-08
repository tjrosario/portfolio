import { FaReact } from 'react-icons/fa';
import { BASE_PATH } from '../constants';
import { Box, Center, Grid, GridItem, Heading, Image, Stack } from './shared';

import SiteContainer from './SiteContainer';
import Socials from './Socials';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      as={'footer'}
      borderTopWidth={'1px'}
      borderTopColor={'gray.300'}
      py={5}
    >
      <SiteContainer>
        <Grid
          alignItems={'center'}
          templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
          gap={[5, 10]}
        >
          <GridItem
            display={'flex'}
            justifyContent={['center', null, 'flex-start']}
            textTransform="lowercase"
          >
            &copy; {YEAR} Tommy Rosario
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={['center', null, 'flex-end']}
          >
            <Socials />
          </GridItem>
        </Grid>
        <Center mt={10}>
          <Box>
            <Heading as={'h6'} fontSize={'md'} my={3} textAlign={'center'}>
              Built with:
            </Heading>
            <Stack isInline spacing={5}>
              <a
                href={'https://reactjs.org/'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <FaReact color={'#61dafb'} fontSize={'22px'} />
              </a>
              <a
                href={'https://chakra-ui.com/'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <Image
                  src={`${BASE_PATH}/img/logo/chakra-ui.png`}
                  alt={'Chakra UI'}
                  height={22}
                />
              </a>
              <a
                href={'https://nextjs.org/'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <Image
                  src={`${BASE_PATH}/img/logo/nextjs.png`}
                  alt={'NextJS'}
                  height={22}
                />
              </a>
            </Stack>
          </Box>
        </Center>
      </SiteContainer>
    </Box>
  );
}
