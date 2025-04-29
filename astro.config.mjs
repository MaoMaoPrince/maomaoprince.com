// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://maomaoprince.github.io',
	integrations: [
		starlight({
			title: 'MaoMaoPrince.com',
			// social: [{ icon: 'discord', label: 'MaoMaoPrince Fishing Discord', href: 'https://github.com/withastro/starlight' }],
			
			logo: {
				src: './src/assets/maomaoprince_logo_256x256.svg',
				alt: 'Logo',
				// replacesTitle: true,
			},
			editLink: {
				baseUrl: 'https://github.com/maomaoprince/maomaoprince.com/edit/main/src/',
			},	
		}),
	],
});
