export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6107bb0b16b098b9416f7623",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-75jxdc59",
                  apiId: "a275268a-6367-4e24-9218-1d4a17f137e4",
                },
                {
                  buildHookId: "6107bb0c8de07fd55ddda433",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-o2vd55t7",
                  apiId: "ffabfda9-d245-4c20-ae15-86220ccb916a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jansindl3r/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-o2vd55t7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
