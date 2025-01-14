import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightLinksValidator from "starlight-links-validator";
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
                "course-ntw2029/assignments/general/exercise-guidelines",
                "course-ntw2029/assignments/general/paper-guidelines",
                "course-ntw2029/assignments/general/outline-guidelines",
              ],
            },
            {
              label: "Exercises",
              collapsed: true,
              items: [
                "course-ntw2029/assignments/exercises/e01-introductions",
                "course-ntw2029/assignments/exercises/e02-explain-something",
                "course-ntw2029/assignments/exercises/e03-boyd",
//                "course-ntw2029/assignments/exercises/e04-goldfinch",
//                "course-ntw2029/assignments/exercises/e05-p1-conf-notes",
//                "course-ntw2029/assignments/exercises/e06-p1-writing-reflection",
//                "course-ntw2029/assignments/exercises/e07-class-participation",
//                "course-ntw2029/assignments/exercises/e08-p2-proposal-conf-notes",
//                "course-ntw2029/assignments/exercises/e09-p2-draft-conf-notes",
//                "course-ntw2029/assignments/exercises/e10-workload",
//                "course-ntw2029/assignments/exercises/e11-p2-writing-reflection",
              ],
            },
            {
              label: "Papers",
              collapsed: true,
              items: [
//                "course-ntw2029/assignments/papers/p1",
//                "course-ntw2029/assignments/papers/p1-outline",
//                //"course-ntw2029/assignments/papers/p1-draft",
//                "course-ntw2029/assignments/papers/p1-final",
//                "course-ntw2029/assignments/papers/p2-1",
//                "course-ntw2029/assignments/papers/p2-2-general-proposal",
//                "course-ntw2029/assignments/papers/p2-3-academicconversation",
//                "course-ntw2029/assignments/papers/p2-4-brief-source-summary",
//                "course-ntw2029/assignments/papers/p2-5-source-summary-outline",
//                "course-ntw2029/assignments/papers/p2-6-proposal-source-outline",
//                "course-ntw2029/assignments/papers/p2-7-intro-full-outline",
//                "course-ntw2029/assignments/papers/p2-8-full-draft-and-outline",
//                "course-ntw2029/assignments/papers/p2-9-final",
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
				{
					label: "Online resources",
					collapsed: true,
					items: [
						"course-ntw2029/resources/writing/online/nusc",
					]
				},
				{
					label: "Topics",
					collapsed: true,
					items: [
						"course-ntw2029/resources/writing/topics/citations",
						"course-ntw2029/resources/writing/topics/grammar",
						"course-ntw2029/resources/writing/topics/software",
						"course-ntw2029/resources/writing/topics/topic-sentences",
						"course-ntw2029/resources/writing/topics/analysis-questions",
						],
				  },
				 ],
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
