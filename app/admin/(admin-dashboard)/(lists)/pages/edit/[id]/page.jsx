"use client";

import {Input, Heading, Container, FormLabel, VStack, Button, FormControl} from "@chakra-ui/react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import schemas from "../../../../../../../constants/schemas";
import {useRef, useState, useEffect, Suspense} from "react";
import Loading from "../../loading";
import {useRouter} from "next/navigation";

export default function page({params}) {
  const [content, setContent] = useState();
  const [pageData, setPageData] = useState();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getPage(id) {
      console.log("GETTING PAGE DATA");
      const {data: page, error} = await supabase.from("tcn_website_pages").select().eq("id", id);
      if (error) {
        console.log(error);
      }
      console.log("data", page);
      setPageData(page[0]);
    }
    console.log("STARTING", params.id);
    getPage(params.id);
    console.log("PAGE DATA", pageData);
  }, []);

  async function handleSubmit() {
    const page = {};
    Object.keys(schemas.page.fields).map(function (field) {
      if (schemas.page.fields[field].type !== "html") {
        page[field] = document.getElementById(field).value;
      }
    });

    page.content = content;
    const {data, error} = await supabase.from("tcn_website_pages").update(page).eq("id", "2").select();
    if (error) {
      console.error(error);
    }
    console.log(data);
    console.log(page);
  }

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
                    <Input
                      type="text"
                      defaultValue={pageData && pageData[field]}
                    />
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
                    data={pageData && pageData.content}
                    // data="test"
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