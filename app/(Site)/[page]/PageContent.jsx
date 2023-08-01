"use client";

import {Container, Heading, chakra, Flex, Center, useBreakpointValue, Text, VStack} from "@chakra-ui/react";
import items from "../../../constants/items";
import dynamic from "next/dynamic";
import ContactForm from "../../../components/ContactForm";

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
                <VStack>
                  <Heading
                    color="orange.400"
                    textAlign="center"
                    p={4}
                  >
                    {items[relationship.item].title}
                  </Heading>

                  {items[relationship.item].description ? (
                    <Text
                      align="center"
                      fontSize="2xl"
                      as="b"
                    >
                      {items[relationship.item].description}
                    </Text>
                  ) : null}
                  {items[relationship.item].pricing ? (
                    <Text
                      align="center"
                      fontSize="xl"
                      as="b"
                    >
                      {items[relationship.item].pricing}
                    </Text>
                  ) : null}
                </VStack>
                <Flex
                  direction={useBreakpointValue({base: "column", md: "row"})}
                  alignContent="center"
                  justifyContent="center"
                  gap={4}
                  flexGrow={4}
                >
                  {(() => {
                    if (items[relationship.item].packages != undefined) {
                      const ItemComponent = dynamic(() => import("../../../components/" + relationship.component));
                      console.log(ItemComponent);
                      return items[relationship.item].packages.map((_package, i) => {
                        return (
                          <ItemComponent
                            {..._package}
                            id={i}
                          />
                        );
                      });
                    }
                  })()}
                </Flex>
              </>
            );
          })
        : null}

      <Container py={4}>
        <Heading
          py={4}
          color="orange.400"
        >
          Contact Us
        </Heading>
        <ContactForm />
      </Container>
    </Container>
  );
}
