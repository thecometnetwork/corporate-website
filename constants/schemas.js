const schemas = {
  page: {
    fields: {
      title: {
        name: "title",
        type: "text",
      },
      slug: {
        name: "slug",
        type: "text",
      },
      content: {
        name: "content",
        type: "html",
      },
      meta_description: {
        name: "meta description",
        type: "text",
      },
      meta_title: {
        name: "meta title",
        type: "text",
      },
    },
  },
};

export default schemas;
