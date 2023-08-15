import {Link} from "@chakra-ui/react";

export default function CoolLink({href, children, px}) {
  return (
    <Link
      href={href}
      sx={{
        textTransform: "uppercase",
        fontWeight: "bolder",
        fontSize: "24px",
      }}
      _hover={{
        color: "gray",
        transition: "all 0.5s linear",
      }}
      px={px !== undefined ? px : "0"}
    >
      {children}
    </Link>
  );
}
