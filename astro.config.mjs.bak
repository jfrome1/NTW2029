import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Frome NTW2029',
		// Load a JavaScript file.
			head: [
				{
				tag: 'script',
				attrs: {
					src: '/nutshell.js',
					defer: true,
			  },
			},
		    {
				tag: 'script',
				content: `
				  setTimeout(() => {
              Nutshell.setOptions({
                startOnLoad: true,
                lang: 'en',
                dontEmbedHeadings: false
              });
            }, 100);
				`,
			},
		  ],
		}),
	],
});
