import { useState } from 'react';
import { CgLink } from 'react-icons/cg';
import { ImVideoCamera } from 'react-icons/im';
import { SiGithub } from 'react-icons/si';
import Layout from '../components/Layout';
import { Box, Grid, GridItem, Heading, IconButton, Stack, Text, useDisclosure } from '../components/shared';
import WorkModal from '../components/WorkModal';
import { BASE_PATH } from '../constants';
import { getWork } from '../services/work';

export default function Work({ data }) {
  const [activeWork, setActiveWork] = useState(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const viewWork = (work) => {
    setActiveWork(work);
    onOpen();
  };

  return (
    <Layout pageTitle={'Work Samples'}>
      <Heading
        as={'h1'}
        fontSize={['5xl', null, '7xl']}
      >Work Samples
      </Heading>

      <Text>This a hand-picked collection of some recent work I've had the pleasure of being involved with building. Enjoy!</Text>

      <Grid
        templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
        gap={[5, 10]}
      >
        {data.map((work, index) => (
          <GridItem
            borderColor={'gray.200'}
            borderRadius={'lg'}
            borderWidth={'1px'}
            display={'flex'}
            flexDir={'column'}
            key={index}
          >
            <Box
              backgroundImage={`url(${BASE_PATH}/${work.preview})`}
              backgroundPosition={'center'}
              backgroundSize={'cover'}
              borderColor={'gray.200'}
              borderTopLeftRadius={'lg'}
              borderTopRightRadius={'lg'}
              borderBottomWidth={'1px'}
              height={'200px'}
            />
            <Box p={5}>
              <Heading
                as={'h2'}
                fontSize={'larger'}
              >{work.title}
              </Heading>
              <Text mt={3}>{work.description}</Text>
            </Box>

            <Stack
              as={'footer'}
              background={'gray.200'}
              isInline
              mt={'auto'}
              justifyContent={'flex-end'}
              spacing={0}
            >
              {work.src
                && (
                  <IconButton
                    aria-label={'View screenshare'}
                    icon={<ImVideoCamera />}
                    onClick={() => viewWork(work)}
                    variant={'ghost'}
                  />
                )}
              {work.github
                && (
                  <a
                    href={work.github}
                    rel={'noreferrer'}
                    target={'_blank'}
                  >
                    <IconButton
                      aria-label={'View on GitHub'}
                      icon={<SiGithub />}
                      variant={'ghost'}
                    />
                  </a>
                )}
              {work.url
                && (
                  <a
                    href={work.url}
                    rel={'noreferrer'}
                    target={'_blank'}
                  >
                    <IconButton
                      aria-label={'View website'}
                      icon={<CgLink />}
                      variant={'ghost'}
                    />
                  </a>
                )}
            </Stack>
          </GridItem>
        ))}
      </Grid>

      {activeWork
        && (
          <WorkModal
            isOpen={isOpen}
            onClose={onClose}
            work={activeWork}
          />
        )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = await getWork();

  return {
    props: {
      data
    }
  };
}
