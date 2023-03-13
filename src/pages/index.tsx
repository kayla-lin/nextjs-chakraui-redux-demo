import { Center, Container } from "@chakra-ui/react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Container>
        <Center>
          <Link
            style={{ color: "blue", textDecoration: "underline" }}
            href="/class"
          >
            Go to /class
          </Link>
        </Center>
      </Container>
    </>
  );
}
