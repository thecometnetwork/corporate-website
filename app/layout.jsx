import {Providers} from "./providers";

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
          {/* <Header /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: "The Comet Network s.r.o.",
  description:
    "Discover the digital revolution with The Comet Network. We are a leading digital agency specializing in creating powerful websites, seamless web applications, and captivating graphic designs. Transform your online presence and unlock your brand's potential today.",
};
