"use client";

import {Input, Heading, Container, FormLabel, VStack, Button, FormControl} from "@chakra-ui/react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import schemas from "../../../../../../constants/schemas";
import {useRef, useState} from "react";

export default function page() {
  const [content, setContent] = useState();
  const supabase = createClientComponentClient();

  async function handleSubmit() {
    const page = {};
    Object.keys(schemas.page.fields).map(function (field) {
      if (schemas.page.fields[field].type !== "html") {
        page[field] = document.getElementById(field).value;
      }
    });
    page.content = content;
    const {data, error} = await supabase.from("tcn_website_pages").insert(page);
    if (error) {
      console.error(error);
    }
    console.log(data);
    console.log(page);
  }

  console.log(Object.keys(schemas.page.fields));
  return (
    <Container>
      <Heading>New page</Heading>
      <Button onClick={handleSubmit}>Save</Button>
      <form id="form">
        <VStack spacing={4}>
          {Object.keys(schemas.page.fields).map(function (field) {
            if (schemas.page.fields[field].type === "text") {
              return (
                <>
                  <FormControl id={field}>
                    <FormLabel>{schemas.page.fields[field].name}</FormLabel>
                    <Input type="text" />
                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                  </FormControl>
                </>
              );
            }
            if (schemas.page.fields[field].type === "html") {
              return (
                <>
                  <FormLabel>{schemas.page.fields[field].name}</FormLabel>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({event, editor, data});
                      setContent(data);
                    }}
                    onBlur={(event, editor) => {
                      console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log("Focus.", editor);
                    }}
                  />
                </>
              );
            }
          })}
        </VStack>
      </form>
    </Container>
  );
}
