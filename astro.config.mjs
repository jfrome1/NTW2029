import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
// import markdoc from '@astrojs/markdoc';
import remarkExternalLinks from "remark-external-links";
import starlightNutshell from "starlight-nutshell";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  // site: 'https://jfrome1.github.io/ntw2029/', // GitHub Pages URL config
  // base: '/ntw2029/',
  integrations: [
    starlight({
      plugins: [
        starlightLinksValidator(),
        starlightNutshell(),
        // starlightUtils({
        //   multiSidebar: {
        //     switcherStyle: "dropdown",
        //   },
        // }),
      ],
      title: "NTW2029 - Home",
      components: {
        // Override the default components.
        TableOfContents: "./src/components/CustomTableOfContents.astro",
        Pagination: "./src/components/CustomPagination.astro",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          link: "course-ntw2029/schedule",
          label: "Course schedule",
        },
        {
          label: "Course information",
          collapsed: true,
          items: [
            "course-ntw2029/course-info/start-here",
            "course-ntw2029/course-info/instructor",
            "course-ntw2029/course-info/need-help",
            "course-ntw2029/course-info/readings",
            "course-ntw2029/course-info/conferences",
            "course-ntw2029/course-info/gen-ai-policy",
            "course-ntw2029/course-info/tech-guidelines",
            "course-ntw2029/course-info/policies",
            "course-ntw2029/course-info/grading",
            "course-ntw2029/course-info/extensions",
          ],
        },
        {
          label: "Assignments",
          collapsed: true,
          items: [
            "course-ntw2029/assignments/ex-guidelines",
            "course-ntw2029/assignments/formatting",
            "course-ntw2029/assignments/e01-introductions",
            "course-ntw2029/assignments/e02-explain-something",
            "course-ntw2029/assignments/e03-boyd",
            "course-ntw2029/assignments/e04-goldfinch",
            "course-ntw2029/assignments/p1",
            "course-ntw2029/assignments/p1outline",
            "course-ntw2029/assignments/e10-workload",
          ],
        },
        {
          label: "Resources",
          collapsed: true,
          items: [
            {
              label: "Evolution",
              collapsed: true,
              items: [
                "course-ntw2029/resources/evolution/ev-religion",
                "course-ntw2029/resources/evolution/ev-resources",
              ],
            },
            {
              label: "Writing",
              collapsed: true,
              items: [
                "course-ntw2029/resources/writing/citations",
                "course-ntw2029/resources/writing/software",
              ],
            },
          ],
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://cloud.umami.is/script.js",
            "data-website-id": "432e0c5f-d9e1-4c84-b0df-e9b0ad8f603c",
            defer: true,
          },
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🡕" },
        },
      ],
    ],
  },
});
