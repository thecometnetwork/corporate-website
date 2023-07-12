import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/the-comet-network.png"
      width={100}
      height={32}
      alt="Picture of the author"
    />
  );
}
