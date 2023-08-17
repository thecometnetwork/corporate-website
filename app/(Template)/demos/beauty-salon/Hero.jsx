import {Box, Container, Flex, Image, Heading, Text, VStack, Button, useBreakpointValue} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import {Fade} from "react-reveal";
import CoolLink from "./CoolLink";

export default function Hero() {
  const [data, setData] = useState({
    hero: {
      heading: "A unique place 1",
      subheading: "Welcome to The Universe beauty salon",
      button: "Learn More",
    },
  });

  useEffect(() => {
    console.log(data);
    window.localStorage.setItem("hero-component", JSON.stringify(data));

    window.addEventListener("TCNLocalStorageUpdated", (e) => {
      console.log("event", e);
      setData(JSON.parse(window.localStorage.getItem("hero-component")));
    });
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent={useBreakpointValue({base: "center", md: "flex-start"})}
      color="gray.700"
      minH="900px"
      h="900px"
      width="100%"
      backgroundPosition="right"
      backgroundSize={useBreakpointValue({base: "auto 100%", lg: "100% auto"})}
      backgroundImage="url('/templates/high-angle-view-various-spa-products-white-backdrop.jpg')"
      marginTop="150px"
      zIndex="-1"
    >
      <VStack p="40px">
        <Fade left>
          <Heading size="4xl">{data && data.hero.heading}</Heading>
        </Fade>

        <Fade right>
          <Text
            textAlign={useBreakpointValue({base: "center", md: "left"})}
            fontSize="6xl"
          >
            {data && data.hero.subheading}
          </Text>
        </Fade>
        <Fade>
          <CoolLink href="./">{data && data.hero.button}</CoolLink>
        </Fade>
      </VStack>
    </Flex>
  );
}

Hero.editableProps = {
  componentName: "hero-component",
  hero: {
    name: "hero-section",
    label: "Hero Section",
    elements: [
      {element: "heading", type: "text"},
      {element: "subheading", type: "text"},
      {element: "button", type: "text"},
    ],
  },
};
