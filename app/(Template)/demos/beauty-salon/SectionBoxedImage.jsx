import {Box, Center, Flex, Heading, VStack, Link, Text, useBreakpointValue, chakra, Image} from "@chakra-ui/react";
import CoolLink from "./CoolLink";
import {Fade} from "react-reveal";
import {images, getImageLink} from "./imageLinks";
import {useState, useEffect} from "react";

export default function SectionBoxedImage() {
  const [data, setData] = useState({
    block: {
      heading: "Advanced Skincare",
      subheading:
        "Our highly qualified therapists will carry out an in depth analysis of your skins needs and create the best programme of treatment for you.",
      button: "Learn More",
    },
  });

  useEffect(() => {
    console.log(data);
    window.localStorage.setItem("sbi-component", JSON.stringify(data));

    window.addEventListener("TCNLocalStorageUpdated", (e) => {
      console.log("event", e);
      setData(JSON.parse(window.localStorage.getItem("sbi-component")));
    });
  }, []);

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
            <Heading>{data["block"].heading}</Heading>
            <Text fontSize="2xl">
              {data["block"].subheading}
              Our highly qualified therapists will carry out an in depth analysis of your skins needs and create the best programme of treatment for
              you.
            </Text>
            <CoolLink href="/">{data["block"].button}</CoolLink>
          </VStack>
        </Fade>
      </Flex>
    </Flex>
  );
}

function BoxedImage({w, h, bg}) {
  return (
    <div style={{width: "50%", position: "relative"}}>
      <chakra.div
        style={{width: "80%", height: "80%", position: "absolute", left: "0", top: "0", zIndex: "-1"}}
        borderWidth="5px"
        borderStyle="solid"
        borderColor="accent.100"
      ></chakra.div>
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

SectionBoxedImage.editableProps = {
  componentName: "sbi-component",
  block: {
    name: "block",
    label: "Block 1",
    elements: [
      {element: "heading", type: "text"},
      {element: "subheading", type: "text"},
      {element: "button", type: "text"},
    ],
  },
};
