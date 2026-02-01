// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://pcfixle.com', // Marka koruması için com.tr'de var ama ana site bu
    integrations: [sitemap()],
});
