import { IconButton, Link, Stack } from "@chakra-ui/react"
import { SiGithub, SiLinkedin, SiMinutemailer } from "react-icons/si";

export default function Socials() {

  return (
    <Stack isInline>
      <Link href="https://github.com/tjrosario" isExternal>
        <IconButton aria-label="GitHub Profile" colorScheme="teal" icon={<SiGithub />} variant="outline" />
      </Link>
      <Link href="https://www.linkedin.com/in/tommy-rosario-65771711/" isExternal>
        <IconButton aria-label="LinkedIn Profile" colorScheme="teal" icon={<SiLinkedin />} variant="outline" />
      </Link>
      <Link href="mailto:tomjasonrosario@gmail.com" isExternal>
        <IconButton aria-label="Email me" colorScheme="teal" icon={<SiMinutemailer />} variant="outline" />
      </Link>
    </Stack>
  );
}
