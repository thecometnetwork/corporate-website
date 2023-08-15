"use client";
import {Flex, useDimensions, Text} from "@chakra-ui/react";
import Hero from "./Hero";
import SectionWithBlocks from "./SectionWithBlocks";
import SectionBoxedImage from "./SectionBoxedImage";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Page() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Hero />
      <SectionWithBlocks id="section" />
      <SectionBoxedImage />
      <Testimonials />
      <Contact />
      <Footer />
    </Flex>
  );
}
