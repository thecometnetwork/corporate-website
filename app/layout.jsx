"use client";

import {Flex, Image, Center} from "@chakra-ui/react";
import {Providers} from "./providers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FBChat from "../components/FBChat";

import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
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
            {/* <Header /> */}
            {children}
            <Footer />
            <FBChat />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
