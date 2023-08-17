"use client";
import {Flex, useDimensions, Text} from "@chakra-ui/react";
import Hero from "./Hero";
import SectionWithBlocks from "./SectionWithBlocks";
import SectionBoxedImage from "./SectionBoxedImage";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Editor from "./Editor";

export default function Page() {
  const COMPONENTS = ["Hero", "SectionWithBlocks", "SectionBoxedImage"];
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Editor component={Hero} />
      {/* <Hero /> */}
      <Editor component={SectionWithBlocks} />
      {/* <SectionWithBlocks id="section" /> */}
      <Editor component={SectionBoxedImage} />
      {/* <SectionBoxedImage /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </Flex>
  );
}
