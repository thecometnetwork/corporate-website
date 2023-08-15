import {Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Link} from "@chakra-ui/react";

export default function MobileNav({isOpen, onClose}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        zIndex="9999"
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack
              flex="1 1 0"
              justifyContent="center"
              height="100%"
              textTransform="uppercase"
              fontSize="4xl"
            >
              <Link
                href="/"
                p={4}
              >
                Massages
              </Link>
              <Link
                href="/"
                p={4}
              >
                Beauty Treatments
              </Link>
              <Link
                href="/"
                p={4}
              >
                Peeling
              </Link>
              <Link
                href="/"
                p={4}
              >
                SPA
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
