import {Box, Center, Flex, Heading, VStack, Link, Text, useBreakpointValue, chakra, Image} from "@chakra-ui/react";
import CoolLink from "./CoolLink";
import {Fade} from "react-reveal";
import {images, getImageLink} from "./imageLinks";

export default function () {
  return (
    <Flex
      direction={useBreakpointValue({base: "column", lg: "row"})}
      justifyContent="center"
      py="80px"
    >
      <Box flex="1 1 0">
        <Fade duration={800}>
          <Center>
            <BoxedImage
              w="400px"
              h="500px"
              bg={getImageLink(images.link5, 1000)}
            />
          </Center>
        </Fade>
      </Box>

      <Flex
        flex="1 1 0"
        justifyContent="stretch"
      >
        <Fade
          delay={500}
          duration={800}
        >
          <VStack
            p="40px"
            justifyContent="center"
            alignItems="flex-start"
            height="100%"
            spacing="8"
          >
            <Heading fontFamily="Bad Script">Advanced Skincare</Heading>
            <Text fontSize="2xl">
              Our highly qualified therapists will carry out an in depth analysis of your skins needs and create the best programme of treatment for
              you.
            </Text>
            <CoolLink href="/">Learn More</CoolLink>
          </VStack>
        </Fade>
      </Flex>
    </Flex>
  );
}

function BoxedImage({w, h, bg}) {
  return (
    <div style={{width: "50%", position: "relative"}}>
      <div style={{width: "80%", height: "80%", position: "absolute", left: "0", top: "0", border: "5px solid #FBD2C0", zIndex: "-1"}}></div>
      <div style={{width: "80%", height: "80%", position: "absolute", right: "0", bottom: "0", border: "5px solid black", zIndex: "-1"}}></div>
      <chakra.div
        sx={{
          width: "80%",
          height: "max-content",
          // maxH: "80%",
          // background: bg,
          backgroundSize: "cover",
          // backgroundPosition: "center",
          // position: "absolute",
          margin: "10%",
          zIndex: "9999",
        }}
      >
        <Image
          src={bg}
          width="100%"
          height="auto"
        />
      </chakra.div>
    </div>
  );
}
