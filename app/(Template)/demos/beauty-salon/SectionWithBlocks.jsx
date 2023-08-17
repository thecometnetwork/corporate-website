import {Center, Flex, Heading, Text, VStack, useBreakpointValue, chakra, Container, Image} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {images, getImageCSSLink} from "./imageLinks";
import {Fade} from "react-reveal";

const OrderedFlexTile = chakra(FlexTile);

export default function SectionWithBlocks() {
  const [data, setData] = useState({
    block_1: {
      heading: "A unique place 1",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis condimentum augue id magna semper rutrum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    block_2: {
      heading: "A unique place 2",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis condimentum augue id magna semper rutrum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
  });

  useEffect(() => {
    console.log(data);
    window.localStorage.setItem("swb-component", JSON.stringify(data));

    window.addEventListener("TCNLocalStorageUpdated", (e) => {
      console.log("event", e);
      setData(JSON.parse(window.localStorage.getItem("swb-component")));
    });
  }, []);

  return (
    <Flex
      direction="column"
      width="100%"
      p="40px"
    >
      <Flex
        direction="row"
        flex="1 1 0"
        flexWrap="wrap"
      >
        <FlexTile
          order={useBreakpointValue({base: "0", md: "1", lg: "0"})}
          noBorder
        >
          <VStack
            justifyItems="center"
            width="100%"
            p={4}
            spacing="10"
            id="swb-block_1"
          >
            <Heading
              size="xl"
              p={3}
            >
              {data && data["block_1"].heading}
            </Heading>
            <Image
              src="/templates/divider.png"
              width="30%"
              height="auto"
            />
            <Text textAlign="center">{data && data["block_1"].paragraph}</Text>
          </VStack>
        </FlexTile>
        <FlexTile
          order={useBreakpointValue({base: "1", md: "0", lg: "1"})}
          noBorder
          bg={getImageCSSLink(images.link1, 600)}
        ></FlexTile>
        <FlexTile
          order="2"
          noBorder
        >
          <VStack
            justifyItems="center"
            width="100%"
            p={4}
            spacing="10"
            id="swb-block_2"
          >
            <Heading
              size="xl"
              p={3}
            >
              {data && data["block_2"].heading}
            </Heading>
            <Image
              src="/templates/divider.png"
              width="30%"
              height="auto"
            />
            <Text textAlign="center">{data && data["block_2"].paragraph}</Text>
          </VStack>
        </FlexTile>
        <FlexTile
          order="3"
          bg={getImageCSSLink(images.link2, 600)}
          noBorder
        ></FlexTile>
      </Flex>
      <Flex
        direction="row"
        flex="1 1 0"
        flexWrap="wrap"
        py="40px"
      >
        <FlexTile
          noBorder
          order={useBreakpointValue({base: "0", md: "1", lg: "1"})}
        >
          <VStack
            justifyItems="center"
            width="100%"
            p={4}
            spacing="10"
          >
            <Heading
              size="xl"
              p={3}
            >
              A Unique Place
            </Heading>
            <Image
              src="/templates/divider.png"
              width="30%"
              height="auto"
            />
            <Text textAlign="center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis condimentum augue id magna semper rutrum. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </Text>
          </VStack>
        </FlexTile>
        <FlexTile
          bg={getImageCSSLink(images.link3, 600)}
          noBorder
          order={useBreakpointValue({base: "1", md: "0", lg: "0"})}
        ></FlexTile>
        <FlexTile
          noBorder
          order={useBreakpointValue({base: "2", md: "2", lg: "3"})}
        >
          <VStack
            justifyItems="center"
            width="100%"
            p={4}
            spacing="10"
          >
            <Heading
              size="xl"
              p={3}
            >
              A Unique Place
            </Heading>
            <Image
              src="/templates/divider.png"
              width="30%"
              height="auto"
            />
            <Text textAlign="center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis condimentum augue id magna semper rutrum. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </Text>
          </VStack>
        </FlexTile>
        <FlexTile
          bg={getImageCSSLink(images.link4, 600)}
          noBorder
          order={useBreakpointValue({base: "3", md: "3", lg: "2"})}
        ></FlexTile>
      </Flex>
    </Flex>
  );
}

function FlexTile({children, bg, order, noBorder}) {
  const flexOrder = order ?? false;
  return (
    <Flex
      direction="row"
      //   minH="200px"
      flex={useBreakpointValue({base: "0 0 100%", md: "0 0 50%", lg: "0 0 25%"})}
      bg={bg}
      borderRadius={bg !== undefined ? "15px" : false}
      backgroundPosition="center"
      backgroundSize="cover"
      minH={useBreakpointValue({base: "345px", md: "290px", lg: "270px"})}
      order={flexOrder}
    >
      <Container
        border={noBorder !== undefined ? false : "1px solid white"}
        m={4}
      >
        {children}
      </Container>
    </Flex>
  );
}

SectionWithBlocks.editableProps = {
  componentName: "swb-component",
  block_1: {
    name: "block_1",
    label: "Block 1",
    elements: [
      {element: "heading", type: "text"},
      {element: "paragraph", type: "paragraph"},
    ],
  },
  block_2: {
    name: "Block 2",
    label: "Block 2",
    elements: [
      {element: "heading", type: "text"},
      {element: "paragraph", type: "paragraph"},
    ],
  },
};