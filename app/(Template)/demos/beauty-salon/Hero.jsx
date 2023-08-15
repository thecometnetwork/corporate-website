import {Box, Container, Flex, Image, Heading, Text, VStack, Button, useBreakpointValue} from "@chakra-ui/react";
import {Fade} from "react-reveal";
import CoolLink from "./CoolLink";

export default function Hero() {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      color="gray.700"
      minH="900px"
      width="100%"
      backgroundPosition="right"
      backgroundSize={useBreakpointValue({base: "auto 100%", lg: "100% auto"})}
      backgroundImage="url('/templates/high-angle-view-various-spa-products-white-backdrop.jpg')"
      marginTop="150px"
    >
      <VStack p="40px">
        <Fade left>
          <Heading size="4xl">Welcome</Heading>
        </Fade>

        <Fade right>
          <Text fontSize="6xl">To the Universe Beauty Salon</Text>
        </Fade>
        <Fade>
          <CoolLink href="./">Learn More</CoolLink>
        </Fade>
      </VStack>
    </Flex>
  );
}
