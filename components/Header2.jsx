"use client";

import {Flex, Container} from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header2() {
  return (
    <Flex
      direction={"column"}
      p={4}
    >
      <Logo />
      <Nav />
    </Flex>
  );
}
