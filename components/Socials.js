import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si';
import { IconButton, Link, Stack } from './shared';

export default function Socials({ ...props }) {
  return (
    <Stack isInline {...props}>
      <Link href={'https://github.com/tjrosario'} isExternal>
        <IconButton
          aria-label={'GitHub Profile'}
          icon={<SiGithub />}
          variant={'ghost'}
        />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/tommy-rosario-65771711/'}
        isExternal
      >
        <IconButton
          aria-label={'LinkedIn Profile'}
          icon={<SiLinkedin />}
          variant={'ghost'}
        />
      </Link>
      <Link href={'mailto:tomjasonrosario@gmail.com'} isExternal>
        <IconButton
          aria-label={'Email me'}
          icon={<SiMinutemailer />}
          variant={'ghost'}
        />
      </Link>
    </Stack>
  );
}
