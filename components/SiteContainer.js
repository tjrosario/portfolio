import { Container } from "@chakra-ui/react"

export default function SiteContainer({ children, ...props }) {
  return (
    <Container maxWidth="5xl" {...props}>
      {children}
    </Container>
  );
}
