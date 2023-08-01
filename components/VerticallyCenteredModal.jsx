"use client";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button} from "@chakra-ui/react";

export default function VerticallyCenteredModal({children, isOpen, onClose, header}) {
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay
          bg="blackAlpha.100"
          backdropFilter="blur(5px) grayscale(1)"
        />

        <ModalContent>
          <ModalHeader color="orange.400">{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
