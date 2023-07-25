"use client";

import {useEffect} from "react";

export default function page() {
  useEffect(() => {
    async function handleRequest() {
      const req = await fetch("/ws/pages", {method: "POST"});
      const res = await req.json();
      console.log(res);
    }

    handleRequest();
  });

  return <h1>The Page</h1>;
}

export const metadata = {
  title: "First page - The Comet Network s.r.o.",
  description:
    "Discover the digital revolution with The Comet Network. We are a leading digital agency specializing in creating powerful websites, seamless web applications, and captivating graphic designs. Transform your online presence and unlock your brand's potential today.",
};
