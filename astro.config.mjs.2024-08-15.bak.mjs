import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import markdoc from '@astrojs/markdoc';
import remarkExternalLinks from 'remark-external-links';
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
        {	slug: 'course-ntw2029/schedule'	},
         {   label: 'Course',
			items: [
			{
				label: 'General info',
				collapsed: true,
		            items: [
						'course-ntw2029/general-info/instructor',
						'course-ntw2029/general-info/need-help',
						'course-ntw2029/general-info/readings',
						'course-ntw2029/general-info/schedule',
					],
        },
		{	label: 'Exercises',
			collapsed: true,
				items: [
					'course-ntw2029/exercises/e01-introductions',
					'course-ntw2029/exercises/e02-explain-something',
				],
		  },
		],
		},
		  {
			label: 'Writing',
        //   collapsed: true,
            items: [
                { link: '/writing/assignments', label: 'Assignments' },
                { link: '/writing/resources', label: 'Resources' },
                // Add more items as needed
            ],
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
   markdown: {
    remarkPlugins: [
      [remarkExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  }
});
