import {Flex, Heading, VStack, useBreakpointValue, Image, Center, Text, Link} from "@chakra-ui/react";

export default function () {
  return (
    <VStack
      w="100%"
      py="30px"
      borderTop="2px solid black"
    >
      <Flex
        direction={useBreakpointValue({base: "column", md: "row"})}
        w="100%"
        justifyContent="space-around"
      >
        <VStack justifyContent="flex-start">
          <Heading>Useful Link</Heading>
          <Link href="#">Link a </Link>
          <Link href="#">Link b </Link>
          <Link href="#">Link c </Link>
          <Link href="#">Link d </Link>
        </VStack>
        <VStack>
          <Heading>Products</Heading>
          <Link href="#">Link a </Link>
          <Link href="#">Link b </Link>
          <Link href="#">Link c </Link>
          <Link href="#">Link d </Link>
        </VStack>
        <VStack>
          <Image
            src="/templates/logo.png"
            width="150px"
            height="auto"
          />
          <Text>The Universe Beauty Salon</Text>
        </VStack>
      </Flex>
      <Center>
        <Text>{new Date().getFullYear()} - The Universe Beauty Salon</Text>
      </Center>
    </VStack>
  );
}
