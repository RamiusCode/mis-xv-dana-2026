// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // El dominio real: WhatsApp necesita la URL absoluta de la miniatura,
  // con una ruta relativa no la muestra.
  site: 'https://mis-xv-dana-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});