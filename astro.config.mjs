import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import markdoc from '@astrojs/markdoc';
// import starlightDocSearch from '@astrojs/starlight-docsearch';
// import overrideIntegration from "./src/overrideIntegration.mjs";

export default defineConfig({

  integrations: [
    // overrideIntegration(),
    starlight({
      components: {
        Pagination: "./src/components/CustomPagination.astro"
      },
      plugins: [
        //starlightLinksValidator(),
        // starlightDocSearch({
        //   appId: 'W2YTUVRLY4',
        //   apiKey: '1a02b96607065a3c2415add03203508d',
        //   indexName: 'ntw_2029',
        // }),
        starlightUtils({
          multiSidebar: {
            switcherStyle: "horizontalList",
          },

        }),
      ],
      title: 'My Docs',
      customCss: [
        './src/styles/custom.css'
      ],
      sidebar: [
        {
          label: 'NTW2029',
          // Don't collapse the main group by default.
          collapsed: false,
          autogenerate: { directory: 'ntw2029', collapsed: true },
        },
        {
          label: 'General course info',
          // Don't collapse the main group by default.
          collapsed: false,
          autogenerate: { directory: 'courses', collapsed: true },
        },
        {
          label: 'Writing',
          autogenerate: { directory: 'writing', collapsed: true },
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: '/js/nutshell.js',
            defer: true,
          }
        },
        {
          tag: 'script',
          attrs: {
            src: '/nutshell-config.js',
            defer: true,
          }
        }
      ]
    }),
    markdoc(),

  ],

});
