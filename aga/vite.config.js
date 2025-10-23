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
        membership: resolve(__dirname, 'src/membership.html'),
        members: resolve(__dirname, 'src/members.html'),
        login: resolve(__dirname, 'src/login.html'),
        eecg: resolve(__dirname, 'src/eecg-awards-form.html'),
        special: resolve(__dirname, 'src/special-event-awards-form.html'),
        council: resolve(__dirname, 'src/council.html'),
        bylaws: resolve(__dirname, 'src/bylaws.html'),
        donate: resolve(__dirname, 'src/donate.html'),
        aboutJournal: resolve(__dirname, 'src/about-the-journal.html'),
        presidents: resolve(__dirname, 'src/presidents.html'),
        keyLecture: resolve(__dirname, 'src/key-lecture.html'),
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
