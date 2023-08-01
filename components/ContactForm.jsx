import {Input, FormControl, FormLabel, FormHelperText, Button, Textarea, VStack, Alert, useDisclosure, CloseButton} from "@chakra-ui/react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useState} from "react";

export default function ContactForm(props) {
  const id = props.id ?? "";

  const {isOpen: isVisible, onClose, onOpen} = useDisclosure({defaultIsOpen: true});

  const [isLoading, setIsLoading] = useState(false);
  const [formHasError, setFormHasError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

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

  const supabase = createClientComponentClient();

  async function handleSubmit() {
    const contactMessage = {
      name: document.getElementById(id + "name").value,
      email: document.getElementById(id + "email").value,
      message: document.getElementById(id + "message").value,
    };

    setIsLoading(true);

    const {data, error} = await supabase.from("tcn_website_contact_submissions").insert(contactMessage);

    setIsLoading(false);

    if (error) {
      console.log(error);
      setFormHasError(true);
    } else {
      setFormHasError(false);
      setFormSuccess(true);
    }
  }

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
                  id={id + field.name}
                  name={field.name}
                />
              ) : (
                <Textarea
                  resize="none"
                  focusBorderColor="orange.400"
                  id={id + field.name}
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
          <>
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
          </>
        ) : null}
      </VStack>
    </>
  );
}
