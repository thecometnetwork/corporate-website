import {Providers} from "./providers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Montserrat} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";

const montserrat = Montserrat({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      style={{minHeight: "100vh"}}
    >
      <body
        className={montserrat.className}
        style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", overflowX: "hidden"}}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
