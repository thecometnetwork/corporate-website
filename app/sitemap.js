import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

export default async function sitemap() {
  const supabase = createClientComponentClient();

  const {data: pages, error} = await supabase.from("tcn_website_pages").select();

  return pages.map((page) => {
    return {
      url: process.env.BASE_URL + page.slug,
      lastModified: new Date(),
    };
  });
}
