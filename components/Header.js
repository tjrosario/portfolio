import React from "react";
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
  Heading,
  IconButton,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure
} from "@chakra-ui/react";

import { BASE_PATH } from "../constants";
import Link from 'next/link'
import { CgMenuRound } from "react-icons/cg";
import { SITE_MENU } from '../constants';
import Socials from './socials';

export default function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box as="header" mb={3}>
      <Flex alignItems="center" justifyContent="center">
        <Box maxW={["20vw", null, "300px"]}>
          <Link href={'/'}>
            <a><Image src={`${BASE_PATH}/img/memoji.png`} alt="Tommy Rosario Memoji" /></a>
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
  );
}
