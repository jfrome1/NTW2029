import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import markdoc from '@astrojs/markdoc';
// import remarkExternalLinks from 'remark-external-links';

export default defineConfig({
//  site: 'https://jfrome1.github.io/ntw2029/', // GitHub Pages URL config
//  base: '/ntw2029/',
  integrations: [
    starlight({
      plugins: [
//        starlightLinksValidator(),
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
			autogenerate: { directory: 'course-ntw2029', collapsed: true },
        },
		{
			label: 'General',
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
    markdoc()
  ],
/*   markdown: {
    remarkPlugins: [
      [remarkExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  } */
});
