"use client";

import {Container, Heading, chakra} from "@chakra-ui/react";

export default function PageContent({page}) {
  return (
    <Container
      maxW="80%"
      p={4}
    >
      <Heading color="orange.400">{page.title}</Heading>
      <chakra.div dangerouslySetInnerHTML={{__html: page.content}}></chakra.div>
    </Container>
  );
}
