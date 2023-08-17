import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
  Center,
} from "@chakra-ui/react";
import {NAV_ITEMS} from "./navItems";

export default function MobileNav({isOpen, onClose}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        zIndex="9999"
        size="full"
        p={0}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <VStack
              height="100%"
              textTransform="uppercase"
              fontSize="4xl"
            >
              {NAV_ITEMS.map((item) => {
                return (
                  <Center
                    flex="1 1 0"
                    w="100%"
                    _hover={{
                      backgroundColor: "accent.100",
                    }}
                  >
                    <Link
                      href="/"
                      p={4}
                      alignItems="center"
                      justifyItems="center"
                    >
                      {item}
                    </Link>
                  </Center>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
