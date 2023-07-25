import {createRouteHandlerClient} from "@supabase/auth-helpers-nextjs";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {Client} from "pg";

export async function POST(request) {
  const supabase = createRouteHandlerClient({cookies});
  const {
    data: {session},
    error,
  } = await supabase.auth.getSession();

  if (session != null) {
    const client = new Client();
    await client.connect();
    const result = await client.query("SELECT * from tcn_website_pages WHERE false");
    console.log(result);
    await client.end();

    return NextResponse.json(result);
  }

  //   return NextResponse.json({error: "User not authenticated"});
}
