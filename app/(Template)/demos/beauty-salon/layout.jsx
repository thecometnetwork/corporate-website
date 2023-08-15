"use client";
import Header from "./Header";
import Styles from "./Styles";

import {useRef} from "react";
import {useDimensions} from "@chakra-ui/react";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {Providers} from "./providers";
import {Analytics} from "@vercel/analytics/react";

export default function RootLayout({children}) {
  const containerRef = useRef();
  const containerScrolled = useDimensions(containerRef, true);

  return (
    <html
      lang="en"
      style={{minHeight: "100vh"}}
    >
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowX: "hidden",
        }}
      >
        <Providers>
          <Header isScrolled={containerScrolled?.contentBox?.top < -150 ? true : false} />
          <div ref={containerRef}>{children}</div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
