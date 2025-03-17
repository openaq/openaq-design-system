// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Overview',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Design System Overview', slug: 'overview' },
					],
				},
				{
					label: 'Components',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Components Overview', slug: 'components' },
					],
				},
			],
		}),
	],
});
