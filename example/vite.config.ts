import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'capacitor-sunmi-printer-v7',
        '@capacitor/core',
        '@capacitor/splash-screen'
      ]
    }
  },
});
