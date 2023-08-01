import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";
import {NextResponse} from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({req, res});
  const {
    data: {session},
  } = await supabase.auth.getSession();
  console.log(session);

  // Check auth condition
  if (session == null) {
    // Auth condition not met, redirect to home page.
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/admin/login";
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
    return res;
    // Authentication successful, forward request to protected route.
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/admin/((?!login).*)",
  ],
};
