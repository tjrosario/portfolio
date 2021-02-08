import React from "react";
import { Container, Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react"
import Head from 'next/head';
import Link from 'next/link'
import { BASE_PATH } from "../constants";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { SITE_MENU } from '../constants';
import Socials from '../components/socials';

export default function Layout({ children, pageTitle }) {
  const defaultTitle = "Tommy Rosario, Seasoned Frontend Developer";
  const title = pageTitle ? `${pageTitle} : ${defaultTitle}` : defaultTitle;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${BASE_PATH}/memoji.png`} />
        <title>{title}</title>
      </Head>
      <Container maxWidth="5xl" py={3}>
        <Box as="header" mb={3}>
          <Flex alignItems="center" justifyContent="center">
            <Box maxW={["20vw", null, "300px"]}>
              <Link href={'/'}>
                <a><Image src={`${BASE_PATH}/memoji.png`} alt="Tommy Rosario Memoji" /></a>
              </Link>
            </Box>
            <Flex flex="1">
              <Box display={["none", "block"]}>
                <Heading as="h6" fontSize={["2xl", "3xl", null, "6xl"]} fontStyle="italic">Tommy Rosario</Heading>
                <Text fontSize={["sm", "md", null, "2xl"]}>Seasoned Frontend Developer</Text>
              </Box>

              <Box ml="auto">
                <IconButton
                  aria-label="Toggle Menu"
                  icon={<CgMenuRound />}
                  size="lg"
                  onClick={onOpen}
                  variant="outline"
                />

                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay>
                    <DrawerContent>
                      <DrawerHeader background="gray.200" borderBottomColor="gray.400" borderBottomWidth="1px">
                        <Heading as="h6" fontSize="2xl" fontStyle="italic">Take Your Pick</Heading>
                      </DrawerHeader>
                      <DrawerCloseButton />
                      <DrawerBody>
                        <UnorderedList listStyleType="none" m={0}>
                          {SITE_MENU.map((menuItem, idx) =>
                            <ListItem cursor="pointer" fontSize="larger" key={idx} my={3} _hover={{ color: "gray.500" }}>
                              <Link href={menuItem.value} onClick={onClose}>
                                <a>{menuItem.label}</a>
                              </Link>
                            </ListItem>
                          )}
                        </UnorderedList>
                      </DrawerBody>

                      <DrawerFooter>
                        <Socials />
                      </DrawerFooter>
                    </DrawerContent>
                  </DrawerOverlay>
                </Drawer>
              </Box>
            </Flex>
          </Flex>
        </Box>

        {children}

        <Box as="footer" textAlign="center" py={10}>
          <Box >
            <Heading as="h6" fontSize="sm" fontStyle="italic" my={3}>Built with:</Heading>

            <Stack isInline alignItems="center" justifyContent="center" spacing={5}>
              <a href="https://reactjs.org/" target="_blank">
                <FaReact color="#61dafb" fontSize="22px" />
              </a>
              <a href="https://chakra-ui.com/" target="_blank">
                <Image src={`${BASE_PATH}/chakra-ui.png`} alt="Chakra UI" height={22} />
              </a>
              <a href="https://nextjs.org/" target="_blank">
                <Image src={`${BASE_PATH}/nextjs.png`} alt="NextJS" height={22} />
              </a>
            </Stack>

          </Box>
        </Box>
      </Container>
    </>
  );
}
