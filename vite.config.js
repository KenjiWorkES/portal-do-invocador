import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: '.',
  server: {
    open: '/src/pages/index.html'
  },
  plugins: [
    {
      name: 'redirect-root-to-pages',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            res.writeHead(302, { Location: '/src/pages/index.html' });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        timeline: resolve(__dirname, 'src/pages/timeline.html'),
        regions: resolve(__dirname, 'src/pages/regions.html'),
        champions: resolve(__dirname, 'src/pages/champions.html'),
        modes: resolve(__dirname, 'src/pages/modes.html'),
        contact: resolve(__dirname, 'src/pages/contact.html')
      }
    }
  }
});
