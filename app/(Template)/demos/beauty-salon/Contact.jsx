import {Flex, Input, FormControl, FormLabel, Button, useDisclosure, Alert, CloseButton, Textarea, chakra, Center, Container} from "@chakra-ui/react";

export default function () {
  const {isOpen: isVisible, onClose, onOpen} = useDisclosure();

  const FORM_FIELDS = [
    {
      label: "Name",
      type: "text",
      name: "name",
    },
    {
      label: "Email",
      placeholder: "email@example.com",
      type: "email",
      helperText: "We'll never share your email address",
      name: "email",
    },
    {
      label: "Message",
      type: "textarea",
      placeoholder: "Type here your message, we'll get back to you within 8 hours",
      name: "message",
    },
  ];

  return (
    <Center
      backgroundColor="#FBD2C0"
      w="100%"
      p="100px"
    >
      <Container>
        <chakra.form
          onSubmit={(e) => {
            e.preventDefault();
            onOpen();
          }}
        >
          {FORM_FIELDS.map((field, i) => {
            return (
              <FormControl p="10px">
                <FormLabel>{field.label}</FormLabel>
                {field.type != "textarea" ? (
                  <Input
                    type="email"
                    focusBorderColor="black"
                    //   sx={{borderRadius: "0px"}}
                    borderColor="white"
                    borderRadius="0px"
                    name={field.name}
                  />
                ) : (
                  <Textarea
                    resize="none"
                    focusBorderColor="black"
                    borderColor="white"
                    borderRadius="0px"
                    name={field.name}
                  />
                )}
              </FormControl>
            );
          })}
          <Center p="10px">
            <Button
              type="submit"
              colorScheme="whiteAlpha"
              borderRadius="0px"
            >
              Send
            </Button>
          </Center>
          {isVisible ? (
            <Alert status="success">
              Message sent succesfully! We'll get back to you within 8 hours 😎
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={onClose}
              />
            </Alert>
          ) : null}
        </chakra.form>
      </Container>
    </Center>
  );
}
