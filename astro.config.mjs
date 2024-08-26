import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
// import markdoc from '@astrojs/markdoc';
import remarkExternalLinks from 'remark-external-links';
import vercel from '@astrojs/vercel/serverless';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  // site: 'https://jfrome1.github.io/ntw2029/', // GitHub Pages URL config
  // base: '/ntw2029/',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [
      starlight({
        plugins: [
          // starlightLinksValidator(),
          starlightUtils({
            multiSidebar: {
              switcherStyle: "horizontalList",
            },
          }),
        ],
        title: 'NTW2029 - Home',
        customCss: [
          './src/styles/custom.css'
        ],
        sidebar: [
          {
            label: 'Course',
            items: [
        {
          link: 'course-ntw2029/schedule',
          label: 'Course schedule',
          },
              {
                label: 'General info',
                collapsed: true,
                items: [
                  'course-ntw2029/general-info/instructor',
                  'course-ntw2029/general-info/need-help',
                  'course-ntw2029/general-info/readings',
				  'course-ntw2029/general-info/conferences',
                ],
              },
              {
          label: 'Policies',
          collapsed: true,
          items: [
            'course-ntw2029/policies/gen-ai-policy',
            'course-ntw2029/policies/tech-guidelines',
			'course-ntw2029/policies/policies',
			'course-ntw2029/policies/grading',
			'course-ntw2029/policies/formatting',
			'course-ntw2029/policies/extensions',
          ],
          },
          {
                label: 'Exercises',
                collapsed: true,
                items: [
					'course-ntw2029/exercises/guidelines',
					'course-ntw2029/exercises/e01-introductions',
	                'course-ntw2029/exercises/e02-explain-something',
					'course-ntw2029/exercises/e03-boyd',
					'course-ntw2029/exercises/e10-workload',
                ],
              },
			  {
                label: 'Resources',
                collapsed: true,
                items: [
					'course-ntw2029/resources/ev-religion',
					'course-ntw2029/resources/ev-resources',                ],
              },
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
  ],
  markdown: {
      remarkPlugins: [
              [remarkExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
      ],
	  rehypePlugins: [
		[
		  rehypeExternalLinks,
		  {
			content: { type: 'text', value: ' 🡕' }
		  }
		],
	  ],
    },
});
