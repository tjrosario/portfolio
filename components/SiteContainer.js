import { Container } from './shared';

export default function SiteContainer({ children, ...props }) {
  return (
    <Container
      maxWidth={'5xl'}
      {...props}
    >
      {children}
    </Container>
  );
}
