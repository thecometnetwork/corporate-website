"use client";

import {
  Container,
  Text,
  Center,
  Stack,
  HStack,
  VStack,
  Heading,
  Flex,
  Image,
  Box,
  Divider,
  AbsoluteCenter,
  Button,
  useBreakpointValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import content from "../constants/content";
import {Fade, Zoom} from "react-reveal";

import Footer from "../components/Footer";
import Header from "../components/Header";
import FBChat from "../components/FBChat";

//

export default function Page() {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  return (
    <>
      <Flex
        direction="column"
        alignContent="center"
        justifyContent="center"
      >
        <Center p={4}>
          <Image
            src="/the-comet-network-outline.png"
            width="348px"
            height="112px"
          />
        </Center>
        <Container
          minW="90%"
          textAlign="center"
          py={8}
        >
          <Hero />
          <Fade
            delay={300}
            duration={500}
          >
            <Heading
              color="orange.400"
              py={8}
              marginY={"40px"}
              fontSize={"62px"}
            >
              Why Choose Us?
            </Heading>
          </Fade>
          <Stack
            direction={direction}
            spacing="4"
            gap={12}
            lineHeight="taller"
          >
            <Fade
              left
              delay={300}
              duration={800}
            >
              <Text
                textAlign="left"
                fontSize="large"
                fontWeight="600"
              >
                <Text
                  as={"span"}
                  color={"orange.400"}
                  fontWeight="extrabold"
                >
                  Customized Solutions:
                </Text>{" "}
                We believe in tailoring our services to match your unique requirements. We will work closely with you to understand your vision and
                deliver a digital solution that exceeds your expectations.
              </Text>
            </Fade>
            <Fade
              delay={600}
              duration={800}
            >
              <Text
                textAlign="left"
                fontSize="large"
                fontWeight="600"
              >
                <Text
                  as={"span"}
                  color={"orange.400"}
                  fontWeight="extrabold"
                >
                  Cutting-Edge Technology:
                </Text>{" "}
                Stay ahead of the curve with our state-of-the-art technology stack. We harness the power of the latest web development frameworks and
                design tools to create websites and applications that are not only visually striking but also highly functional and user-friendly.
              </Text>
            </Fade>
            <Fade
              right
              delay={300}
              duration={800}
            >
              <Text
                textAlign="left"
                fontSize="large"
                fontWeight="600"
              >
                <Text
                  as={"span"}
                  color={"orange.400"}
                  fontWeight="extrabold"
                >
                  Timely Delivery:
                </Text>{" "}
                We understand the importance of meeting deadlines. Our efficient project management ensures that your project progresses smoothly and
                is delivered on time, without compromising on quality.
              </Text>
            </Fade>
          </Stack>
        </Container>
        <Container
          minW="80%"
          textAlign="center"
        >
          <Fade duration={800}>
            <Heading
              color="orange.400"
              py={8}
              marginY={"40px"}
              fontSize={"62px"}
            >
              What do we do?
            </Heading>
          </Fade>
          <Grid templateColumns="repeat(1, 1fr)">
            {content.sections.map((section, index) => {
              return (
                <Fade
                  width={"100%"}
                  duration={800}
                  delay={300 * index}
                >
                  <GridItem>
                    <Stack
                      direction={direction}
                      alignItems={"center"}
                      alignContent={"space-around"}
                      _sx={{
                        border: "1px solid black",
                      }}
                      _hover={{
                        borderColor: "orange.400",
                      }}
                    >
                      <VStack
                        alignItems={useBreakpointValue({base: "center", md: "start"})}
                        p={8}
                        textAlign={"left"}
                      >
                        <Heading
                          // textAlign={useBreakpointValue({base: "left", md: "center"})}
                          fontSize={useBreakpointValue({base: "68px", md: "140px"})}
                          color="orange.400"
                          // bgGradient="linear(to-l, orange.400, gray.800)"
                          // bgClip="text"
                          // fontSize='6xl'
                          fontWeight="extrabold"
                          _hover={{
                            color: "gray.800",
                            transition: "color 800ms",
                          }}
                        >
                          {section.heading}
                        </Heading>

                        <Text
                          fontSize={"larger"}
                          fontWeight={600}
                        >
                          {section.content}
                        </Text>
                      </VStack>
                      {/* </Fade>
                <Fade
                  width={"100%"}
                  duration={800}
                  delay={600 * index}
                > */}
                      {/* <Image
                        src={section.image}
                        w={"100%"}
                        h={"100%"}
                      /> */}
                    </Stack>
                  </GridItem>
                </Fade>
              );
            })}
          </Grid>
          <Center py={32}>
            <VStack spacing={4}>
              <Heading color="orange.400">Have a cool project in mind? Get in touch with us and let's make it happen!</Heading>
              <Text
                fontSize={"larger"}
                fontWeight={600}
              >
                Have a cool project in mind? Get in touch with us and let's make it happen!
              </Text>
              <Button
                as="a"
                variant="outline"
                colorScheme="orange"
                size="lg"
                href="mailto:support@thecometnetwork.cz"
              >
                Drop us an email &#128521;
              </Button>
            </VStack>
          </Center>
        </Container>
        <Footer />
        <FBChat />
      </Flex>
    </>
  );
}
