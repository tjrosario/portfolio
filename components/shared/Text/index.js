import { Text as ChakraText } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Button = styled.button`
  color: ${props => props.primary ? 'pink' : 'black'}
`;

export const Text = ({ children, my = 5, ...props }) => (
  <ChakraText
    my={my}
    {...props}
  >{children}
  </ChakraText>
)
