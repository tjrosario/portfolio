import {
  Avatar,
  Box
} from "@chakra-ui/react";

import Link from 'next/link'
import { BASE_PATH } from "../constants";
import Nav from './Nav';
import SiteContainer from './SiteContainer';

export default function Header() {
  return (
    <Box
      as="header"
      background="white"
      borderBottomColor="gray.200"
      borderBottomWidth="1px"
      position="relative"
    >
      <SiteContainer py={1}>
        <Box display="flex" alignItems="center">
          <Link href="/">
            <a>
              <Avatar
                background="white"
                name="Tommy Rosario"
                src={`${BASE_PATH}/img/memoji.png`}
                size={["md"]}
              />
            </a>
          </Link>
          <Nav ml="auto" />
        </Box>
      </SiteContainer>
    </Box>
  );
}
