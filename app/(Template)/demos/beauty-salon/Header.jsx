"use client";
import {Flex, HStack, Image, Text, useBreakpointValue, IconButton, useDisclosure} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import {HamburgerIcon} from "@chakra-ui/icons";

export default function Header({isScrolled}) {
  const desktop = useBreakpointValue({base: false, md: true});
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex
      sx={{position: "fixed", top: "0px", width: "100%", transition: "all 300ms ease-out"}}
      //   opacity="50%"
      height={isScrolled ? "80px" : "150px"}
      bg={isScrolled ? "rgba(255, 255, 255, 0.8)" : "white"}
      direction="row"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      zIndex="500"
      position="relative"
    >
      {desktop ? (
        <DesktopNav />
      ) : (
        <Image
          src="/templates/logo.png"
          width="auto"
          height="100%"
        />
      )}
      {!desktop ? (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            flex="1 1 0"
            position="absolute"
            right="20px"
            size="lg"
            backgroundColor="transparent"
            _hover={{backgroundColor: "transparent"}}
            onClick={onOpen}
          />
          <MobileNav
            isOpen={isOpen}
            onClose={onClose}
          />
        </>
      ) : null}
    </Flex>
  );
}
