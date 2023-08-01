"use client";

import {Container, Flex, Heading, Text, Button, VStack, Center, Square, useBreakpointValue, useDisclosure} from "@chakra-ui/react";
import VerticallyCenteredModal from "./VerticallyCenteredModal";
import ContactForm from "./ContactForm";

export default function Pricing({name, features, discounted_price, original_price, onClick, id}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <Flex
      direction="column"
      padding="30px"
      borderColor="gray.300"
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="10px"
      alignContent="space-evenly"
      justifyContent="space-between"
      flex="1 1 0"
    >
      <VStack textAlign="center">
        <Heading
          size="md"
          color="orange.400"
        >
          {name}
        </Heading>
        {discounted_price && <Text fontSize="3xl">{discounted_price}</Text>}
        <Text as="del">instead of {original_price}</Text>
      </VStack>
      <VStack
        minH="max-content"
        flexGrow={1}
        py={4}
      >
        <Heading
          size="sm"
          color="orange.400"
        >
          Features
        </Heading>

        {features.map((feature) => {
          return <Text>{feature}</Text>;
        })}
      </VStack>
      <Button onClick={onOpen}>I'm interested!</Button>
      <VerticallyCenteredModal
        header={`Inquiry for ${name}`}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ContactForm id={id} />
      </VerticallyCenteredModal>
    </Flex>
  );
}
