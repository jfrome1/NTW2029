import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightLinksValidator from "starlight-links-validator";
//import starlightUtils from "@lorenzo_lewis/starlight-utils";
// import markdoc from '@astrojs/markdoc';
import remarkExternalLinks from "remark-external-links";
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
        // starlightLinksValidator(),
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
            {
				label: "General information",
				collapsed: true,
				items: [
					"course-ntw2029/assignments/general/feedback",
				  "course-ntw2029/assignments/general/ex-guidelines",
				  "course-ntw2029/assignments/general/formatting",
				],
			  },
			  {
				label: "Exercises",
				collapsed: true,
				items: [
					"course-ntw2029/assignments/exercises/e01-introductions",
					"course-ntw2029/assignments/exercises/e02-explain-something",
					"course-ntw2029/assignments/exercises/e03-boyd",
					"course-ntw2029/assignments/exercises/e04-goldfinch",
					"course-ntw2029/assignments/exercises/e05-p1-conf-notes",
					"course-ntw2029/assignments/exercises/e06-writing-reflection",
					//"course-ntw2029/assignments/exercises/e07",
					//"course-ntw2029/assignments/exercises/e08",
					//"course-ntw2029/assignments/exercises/e09",
					"course-ntw2029/assignments/exercises/e10-workload",
					//"course-ntw2029/assignments/exercises/e11",
				],
			  },
			  {
				label: "Papers",
				collapsed: true,
				items: [
					"course-ntw2029/assignments/papers/p1",
					"course-ntw2029/assignments/papers/p1-outline",
					//"course-ntw2029/assignments/papers/p1-draft",
					"course-ntw2029/assignments/papers/p1-final",
					//"course-ntw2029/assignments/papers/p2-general-proposal",
					//"course-ntw2029/assignments/papers/p2-academic-conversation",
					//"course-ntw2029/assignments/papers/p2-brief-source",
					//"course-ntw2029/assignments/papers/p2-source-summary",
					//"course-ntw2029/assignments/papers/p2-proposal-draft-outline",
					//"course-ntw2029/assignments/papers/p2-intro-full-outline",
					//"course-ntw2029/assignments/papers/p2-full-draft",
					//"course-ntw2029/assignments/papers/p2-final",
				],
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
              items: [
                "course-ntw2029/resources/evolution/ev-religion",
                "course-ntw2029/resources/evolution/ev-resources",
                "course-ntw2029/resources/evolution/nct",
              ],
            },
            {
              label: "Writing",
              collapsed: true,
              items: [
                "course-ntw2029/resources/writing/citations",
                "course-ntw2029/resources/writing/grammar",
                "course-ntw2029/resources/writing/software",
                "course-ntw2029/resources/writing/topic-sentences",
              ],
            },
          ],
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://scripts.simpleanalyticscdn.com/latest.js",
            defer: true,
            async: true,
          },
        },
      ],
    }),
    compress({
      HTML: {
        "html-minifier-terser": {
          removeComments: true,
        },
      },
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
