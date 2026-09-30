import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        timeline: resolve(__dirname, 'timeline.html'),
        regions: resolve(__dirname, 'regions.html'),
        champions: resolve(__dirname, 'champions.html'),
        modes: resolve(__dirname, 'modes.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
