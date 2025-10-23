import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about-the-association.html'),
        contact: resolve(__dirname, 'src/contact.html'),
      }
    },
    minify: 'terser',
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
    open: true
  }
});
