import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightNutshell from "starlight-nutshell";
import compress from "astro-compress";
import starlightAutoDrafts from "starlight-auto-drafts";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " ↗" },
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
  integrations: [
    starlight({
      head: [
        {
          tag: 'script',
          attrs: {
            src: '/scripts/version-checker.js', 
            async: true, 
          },
        },
      ],
      plugins: [
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnInconsistentLocale: false,
          errorOnInvalidHashes: false,
        }),
        starlightNutshell(),
        starlightAutoDrafts({
          highlights: {
            badges: true,
          },
        }),
      ],
      markdown: {
        headingLinks: false,
      },
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 3,
      },
      title: "NTW2029 - Home",
      components: {
        // Override the default components.
        TableOfContents: "./src/components/CustomTableOfContents.astro",
        Pagination: "./src/components/CustomPagination.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          link: "course-ntw2029/schedule",
          label: "Course schedule",
        },
        {
          link: "course-ntw2029/schedule-export",
          label: "Schedule (draft export)",
        },
        {
          label: "Course information",
          collapsed: true,
          autogenerate: { directory: "course-ntw2029/course-info" },
        },
        {
          label: "Assignments",
          collapsed: true,
          items: [
            {
              label: "Exercises",
              collapsed: true,
              autogenerate: {
                directory: "course-ntw2029/assignments/exercises",
              },
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
            { link: "course-ntw2029/resources/ev-religion", label: "Evolution and Religion" },
            { link: "course-ntw2029/resources/ev-resources", label: "Evolution resources" },
            { link: "course-ntw2029/resources/questions-about-evolution", label: "Questions about evolution" },
          ],
        },
        // Hidden sections (faqs, hidden) - not included in sidebar
        // Other resources marked draft - shown later in semester
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
});
