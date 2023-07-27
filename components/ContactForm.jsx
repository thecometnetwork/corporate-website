import {Input, FormControl, FormLabel, FormHelperText, Button, Textarea, VStack, Alert, useDisclosure, CloseButton} from "@chakra-ui/react";

export default function ContactForm({handleSubmit, formHasError, formSuccess}) {
  const {isOpen: isVisible, onClose, onOpen} = useDisclosure({defaultIsOpen: true});

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
    <>
      <VStack>
        {FORM_FIELDS.map((field, i) => {
          return (
            <FormControl>
              <FormLabel>{field.label}</FormLabel>
              {field.type != "textarea" ? (
                <Input
                  type="email"
                  focusBorderColor="orange.400"
                  id={field.name}
                  name={field.name}
                />
              ) : (
                <Textarea
                  resize="none"
                  focusBorderColor="orange.400"
                  id={field.name}
                  name={field.name}
                />
              )}
              {field.helperText !== undefined ? <FormHelperText>{field.helperText}</FormHelperText> : null}
            </FormControl>
          );
        })}
        <Button onClick={handleSubmit}>Send</Button>
        {formHasError == true ? (
          <Alert status="error">
            Oh shoot! An error occurred on our end. Please try again or write us at support@thecometnetwork.cz
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        ) : null}
        {formSuccess == true ? (
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
      </VStack>
    </>
  );
}
