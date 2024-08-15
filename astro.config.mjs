import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import markdoc from '@astrojs/markdoc';
// import remarkExternalLinks from 'remark-external-links';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
//  site: 'https://jfrome1.github.io/ntw2029/', // GitHub Pages URL config
//  base: '/ntw2029/',
output: 'server',
adapter: vercel({
  webAnalytics: { enabled: true }
}),
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
      title: 'NTW2029',
      customCss: [
        './src/styles/custom.css'
      ],
      sidebar: [
        {
    		label: 'Course',
	    	// Don't collapse the main group by default.
			collapsed: false,
			autogenerate: { directory: 'course-ntw2029', collapsed: true },
        },
/* 		{
			label: 'Policies',
			// Don't collapse the main group by default.
			collapsed: false,
			autogenerate: { directory: 'policies', collapsed: true },
		  }, */
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
/*   markdown: {
    remarkPlugins: [
      [remarkExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  } */
});
