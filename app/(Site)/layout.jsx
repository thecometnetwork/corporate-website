import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
