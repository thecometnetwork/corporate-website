"use client";

import {CacheProvider} from "@chakra-ui/next-js";
import {
  ChakraProvider,
  extendTheme,
  useDisclosure,
  Circle,
  IconButton,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Square,
  HStack,
  Select,
} from "@chakra-ui/react";
import {SettingsIcon, CloseIcon} from "@chakra-ui/icons";
import "./styles.css";
import {useState, useEffect} from "react";

export function Providers({children}) {
  const {isOpen, onOpen, onClose, onToggle} = useDisclosure({defaultIsOpen: false});

  const colors = ["Black", "purple", "yellow", "green"];

  const [tempTheme, setTempTheme] = useState({
    styles: {
      global: {
        "html, body": {
          backgroundColor: "white",
          color: "#737373",
        },
        "h1, h2, h3, h4, h5": {
          color: "#737373",
          lineHeight: "tall",
        },
        a: {
          fontFamily: "Raleway",
          textTansform: "uppercase",
        },
        p: {
          fontSize: "24px",
        },
      },
    },
    fonts: {
      heading: "Bad Script",
      body: "Raleway",
    },
  });

  const [theme, setTheme] = useState(extendTheme(tempTheme));
  const [selectedColor, setSelectedColor] = useState();
  const [selectedTextColor, setSelectedTextColor] = useState();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const handleColor = (item, color) => {
    let _theme = {...tempTheme};
    if (item == "heading") {
      _theme.styles.global["h1, h2, h3, h4, h5"].color = color;
      setTempTheme(_theme);
      setSelectedColor(color);
    }
    if (item == "text") {
      _theme.styles.global["html, body"].color = color;
      setTempTheme(_theme);
      setSelectedTextColor(color);
    }
    setTheme(extendTheme(tempTheme));
  };

  const handleFont = (item, e) => {
    let _theme = {...tempTheme};
    if (item == "heading") {
      _theme.fonts.heading = e.target.value;
    }
    if (item == "text") {
      _theme.fonts.body = e.target.value;
    }
    setTempTheme(_theme);
    setTheme(extendTheme(tempTheme));
  };

  return (
    // <CacheProvider>
    <ChakraProvider theme={theme}>
      {children}
      <IconButton
        isRound={true}
        aria-label="Settings"
        fontSize="20px"
        icon={isOpen ? <CloseIcon /> : <SettingsIcon />}
        id="controls"
        // style={{position: "fixed", bottom: "15px", left: "15px", width: "50px", height: "50px", backgroundColor: "red", borderRadius: "50%"}}
        bottom={15}
        left={15}
        position={"fixed"}
        bg="white"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="orange.400"
        width="50px"
        height="50px"
        p={4}
        _hover={{
          backgroundColor: "orange.400",
        }}
        onClick={onToggle}
      />
      <Box
        hidden={!isOpen}
        position="fixed"
        bottom="100px"
        left="50px"
        backgroundColor="white"
        borderWidth="2px"
        borderStyle="dashed"
        borderColor="orange.400"
        borderRadius="20px"
        w="350px"
        sx={{
          "*": {
            color: "black",
            fontFamily: "Montserrat",
          },
        }}
        zIndex="999"
      >
        <VStack
          p="30px"
          alignItems="flex-start"
          alignContent="flex-start"
        >
          <Heading fontFamily="Raleway">Global Settings</Heading>
          <Text as="span">Heading Font</Text>
          <Select onChange={(e) => handleFont("heading", e)}>
            <option value="Raleway">Raleway</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Bad Script">Bad Script</option>
          </Select>
          <Text as="span">Headings Color</Text>
          <HStack>
            {colors.map((color) => {
              return (
                <Circle
                  bg={color}
                  size="20px"
                  _hover={{border: "2px solid black", cursor: "pointer"}}
                  onClick={() => handleColor("heading", color)}
                  border={selectedColor === color ? "2px solid black" : "2px solid white"}
                  sx={{transition: "all 0.2s linear"}}
                ></Circle>
              );
            })}
          </HStack>
          <Text as="span">Text Font</Text>
          <Select onChange={(e) => handleFont("text", e)}>
            <option value="Raleway">Raleway</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Bad Script">Bad Script</option>
          </Select>
          <Text as="span">Text Color</Text>
          <HStack>
            {colors.map((color) => {
              return (
                <Circle
                  bg={color}
                  size="20px"
                  _hover={{border: "2px solid black", cursor: "pointer"}}
                  onClick={() => handleColor("text", color)}
                  border={selectedTextColor === color ? "2px solid black" : "2px solid white"}
                  sx={{transition: "all 0.2s linear"}}
                ></Circle>
              );
            })}
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
    // </CacheProvider>
  );
}
