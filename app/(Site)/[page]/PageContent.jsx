"use client";

import {Container, Heading, chakra, Flex, Center, useBreakpointValue} from "@chakra-ui/react";
import items from "../../../constants/items";
import dynamic from "next/dynamic";

export default function PageContent({page}) {
  console.log(page);
  return (
    <Container
      maxW="80%"
      p={4}
    >
      <Heading
        color="orange.400"
        pb="30px"
      >
        {page.title}
      </Heading>
      <chakra.div dangerouslySetInnerHTML={{__html: page.content}}></chakra.div>
      {page.relationships && page?.relationships.length > 0
        ? page.relationships.map((relationship) => {
            return (
              <>
                <Heading
                  color="orange.400"
                  textAlign="center"
                  p={4}
                >
                  {items[relationship.item].title}
                </Heading>
                <Flex
                  direction={useBreakpointValue({base: "column", md: "row"})}
                  alignContent="center"
                  justifyContent="center"
                  gap={4}
                  flexGrow={4}
                >
                  {(() => {
                    const ItemComponent = dynamic(() => import("../../../components/" + relationship.component));
                    console.log(ItemComponent);
                    return items[relationship.item].packages.map((_package) => {
                      return <ItemComponent {..._package} />;
                    });
                  })()}
                </Flex>
              </>
            );
          })
        : null}
    </Container>
  );
}
