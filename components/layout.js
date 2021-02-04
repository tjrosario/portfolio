import { Container } from "@chakra-ui/react"
import Head from 'next/head';

export default function Layout({ children, home }) {
  return (
    <Container maxWidth="5xl">
      {children}
    </Container>
  );
}
