"use client";

import {Input, Heading, Container, FormLabel, VStack, Button, FormControl} from "@chakra-ui/react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import schemas from "../../../../../../../constants/schemas";
import {useRef, useState, useEffect, Suspense} from "react";
import Loading from "../../loading";
import {useRouter} from "next/navigation";
import dynamic from "next/dynamic";

export default function page({params}) {
  const TCNEditor = dynamic(() => import("../../../../../../../components/Editor"), {ssr: false});

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
    const {data, error} = await supabase.from("tcn_website_pages").update(page).eq("id", params.id).select();
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
                  <TCNEditor data={pageData && pageData.content} />
                </>
              );
            }
          })}
        </VStack>
      </form>
    </Container>
  );
}
