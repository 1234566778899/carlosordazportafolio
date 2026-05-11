import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://carlosordaz.vercel.app',
  integrations: [
    react(),
  ],
  output: 'static',
});
