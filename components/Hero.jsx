import {Flex, Container, Heading, Stack, Text, Button, Icon, IconProps} from "@chakra-ui/react";
import content from "../constants/content";
import Fade from "react-reveal";

export default function CallToActionWithIllustration() {
  return (
    <Container w="full">
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{base: 8, md: 10}}
        py={{base: 20, md: 13}}
      >
        <Fade
          left
          duration={500}
        >
          <Heading
            fontWeight={600}
            fontSize={{base: "3xl", sm: "4xl", md: "6xl"}}
            lineHeight={"110%"}
          >
            <Text
              // bgGradient="linear(to-tr, gray.800, orange.600, orange.400)"
              color={"orange.400"}
              // bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              {content.landingPage.heroSection.heading}
            </Text>
          </Heading>
        </Fade>
        <Fade
          right
          duration={800}
        >
          <Text
            color={"gray.800"}
            maxW={"3xl"}
            fontWeight="extrabold"
          >
            {content.landingPage.heroSection.subHeading}
          </Text>
        </Fade>
        {/* <Stack
          spacing={6}
          direction={"row"}
        >
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{bg: "orange.500"}}
          >
            Get started
          </Button>
          <Button
            rounded={"full"}
            px={6}
          >
            Learn more
          </Button>
        </Stack> */}
      </Stack>
    </Container>
  );
}
