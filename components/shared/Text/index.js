import { Text as ChakraText } from '@chakra-ui/react';

export const Text = ({ children, my = 5, ...props }) => (
  <ChakraText my={my} {...props}>
    {children}
  </ChakraText>
);
