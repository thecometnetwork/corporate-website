import {Flex, HStack, Image, Text} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import CoolLink from "./CoolLink";

export default function DesktopNav() {
  return (
    <>
      <HStack
        flex="1 1 0"
        justifyContent="flex-end"
      >
        <CoolLink
          href="/"
          px={4}
        >
          Massages
        </CoolLink>
        <CoolLink
          href="/"
          px={4}
        >
          Beauty Treatments
        </CoolLink>
      </HStack>
      <Image
        src="/templates/logo.png"
        width="auto"
        height="100%"
        filter="contrast(200%)"
      />
      <HStack
        flex="1 1 0"
        justifyContent="flex-start"
      >
        <CoolLink
          href="/"
          px={4}
        >
          Peeling
        </CoolLink>
        <CoolLink
          href="/"
          px={4}
        >
          SPA
        </CoolLink>
        <CoolLink
          href="/"
          px={4}
        >
          Nail Art
        </CoolLink>
      </HStack>
    </>
  );
}
