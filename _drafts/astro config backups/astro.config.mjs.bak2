import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import remarkAttr from 'remark-attr';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
	plugins: [starlightLinksValidator()],
	plugins: [starlightUtils()],
    title: 'My Docs',
	customCss: [
        // Relative path to your custom CSS file
        './src/styles/global.css','./src/styles/tailwind.css',
	],
	sidebar: [
		{
			label: 'NTW2029',
			autogenerate: { directory: 'groups' },
		},
	],
  }),
  tailwind(),
  markdoc()
],
});
