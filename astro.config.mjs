import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
//import starlightUtils from "@lorenzo_lewis/starlight-utils";
// import markdoc from '@astrojs/markdoc';
import starlightNutshell from "starlight-nutshell";
import rehypeExternalLinks from "rehype-external-links";

import compress from "astro-compress";

export default defineConfig({
  // site: 'https://jfrome1.github.io/ntw2029/', // GitHub Pages URL config
  // base: '/ntw2029/',
  integrations: [
    starlight({
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 2,
      },
      plugins: [
        starlightLinksValidator({
			errorOnFallbackPages: false,
			errorOnInconsistentLocale: false,
			errorOnInvalidHashes: false,
		}),
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
            "course-ntw2029/course-info/read-this-first",
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
            {
				label: "General information",
				collapsed: true,
				autogenerate: { directory: "course-ntw2029/assignments/general" },
			  },
			{
              label: "Exercises",
              collapsed: true,
			  autogenerate: { directory: "course-ntw2029/assignments/exercises" },
            },
            {
              label: "Papers",
              collapsed: true,
			  autogenerate: { directory: "course-ntw2029/assignments/papers" },
            },
          ],
        },
        {
          label: "Resources",
          collapsed: true,
          items: [
            {
              label: "Evolution",
              collapsed: true,
			  autogenerate: { directory: "course-ntw2029/resources/evolution" },
            },
            {
              label: "Writing",
              collapsed: true,
		      autogenerate: { directory: "course-ntw2029/resources/writing" },
				},
        	  ],
        	},
      	],
    },
),
    compress({
      HTML: {
        "html-minifier-terser": {
          removeComments: true,
        },
      },
    }),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🡕" },
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
});
