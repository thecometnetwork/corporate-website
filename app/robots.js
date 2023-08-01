export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: process.env.BASE_URL + "sitemap.xml",
  };
}
