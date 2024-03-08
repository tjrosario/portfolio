import Link from 'next/link';
import Nav from './Nav';
import { Avataaar, Box, Text } from './shared';
import SiteContainer from './SiteContainer';

export default function Header() {
  return (
    <Box
      as={'header'}
      background={'white'}
      borderBottomColor={'gray.200'}
      borderBottomWidth={'1px'}
      position={'relative'}
    >
      <SiteContainer py={1}>
        <Box display={'flex'} alignItems={'center'}>
          <Link href={'/'}>
            <Box display={'flex'} alignItems={'center'} gap="2">
              <Avataaar style={{ width: '50px', height: '50px' }} />
              <Text>'sup</Text>
            </Box>
          </Link>
          <Nav ml={'auto'} />
        </Box>
      </SiteContainer>
    </Box>
  );
}
