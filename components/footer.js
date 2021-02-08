import {
  Box,
  Image,
  Heading, 
  Stack
} from "@chakra-ui/react";

import { BASE_PATH } from "../constants";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" textAlign="center" py={10}>
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
  );
}
