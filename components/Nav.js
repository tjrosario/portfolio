
import Link from 'next/link';
import { useRef } from 'react';
import { CgMenuRound } from 'react-icons/cg';
import { SITE_MENU } from '../constants';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useDisclosure
} from './shared';
import Socials from './Socials';

export default function Nav({ onToggle, ...props }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box {...props}>
      <Flex position={'relative'}>
        <Stack
          as={'nav'}
          direction={['column', 'row']}
          display={{ base: 'none',
            md: 'flex' }}
          justify={['center', 'space-between', 'flex-end']}
          spacing={[5, 10]}
        >
          {SITE_MENU.map((menuItem, idx) => (
            <NavItem
              key={idx}
              to={menuItem.value}
            >{menuItem.label}
            </NavItem>
          ))}
        </Stack>
      </Flex>

      <Box
        display={['flex', null, 'none']}
        ml={'auto'}
      >
        <IconButton
          aria-label={'Toggle Menu'}
          icon={<CgMenuRound />}
          size={'lg'}
          onClick={onOpen}
          variant={'outline'}
        />

        <Drawer
          isOpen={isOpen}
          placement={'right'}
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent
              background={'gray.700'}
              color={'white'}
            >
              <DrawerHeader>
                <Heading
                  as={'h6'}
                  fontSize={'2xl'}
                >Take Your Pick
                </Heading>
              </DrawerHeader>
              <DrawerCloseButton />
              <DrawerBody>
                <UnorderedList
                  listStyleType={'none'}
                  m={0}
                >
                  {SITE_MENU.map((menuItem, idx) => (
                    <ListItem
                      cursor={'pointer'}
                      fontSize={'larger'}
                      key={idx}
                      my={3}
                      _hover={{ color: 'gray.500' }}
                    >
                      <Link
                        href={menuItem.value}
                        onClick={onClose}
                      >
                        <a>{menuItem.label}</a>
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </DrawerBody>

              <DrawerFooter>
                <Socials />
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Box>
  );
}

const NavItem = ({ children, isLast, to = '/', ...props }) => (
  <Link href={to}>
    <a>
      <Text
        display={'block'}
        {...props}
        _hover={{ color: 'gray.500' }}
      >
        {children}
      </Text>
    </a>
  </Link>
);
