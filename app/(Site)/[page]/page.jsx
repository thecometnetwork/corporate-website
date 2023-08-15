import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import PageContent from "./PageContent";

const supabase = createClientComponentClient();

export async function generateStaticParams() {
  const {data, error} = await supabase.from("tcn_website_pages").select();
  console.log(data[0]);

  const paths = data.map((page) => ({
    slug: page.slug,
  }));

  console.log("PATHS", paths);

  return paths;
}

async function getPage(slug) {
  const {data: page, error} = await supabase.from("tcn_website_pages").select().eq("slug", slug);
  if (page.length == 0) {
    return false;
  }
  return page[0];
}

export default async function page({params}) {
  console.log("PARAMS", params);
  const slug = params.page;

  console.log("Rendering started", slug);

  const page = await getPage(slug);

  console.log(page);

  if (!page) {
    return <span>Page not found :(</span>;
  }
  return <PageContent page={page} />;
}

export async function generateMetadata({params}, parent) {
  console.log("META GENERATION", params);

  const page = await getPage(params.page);

  console.log("META GENERATION page", page);

  // return {
  //   title: page.tile,
  //   description: page.meta_description,
  // };

  return {
    title: page.meta_title,
    description: page.meta_description,
    metadataBase: new URL(process.env.BASE_URL),
    alternates: {
      canonical: "/" + page.slug,
    },
  };
}
