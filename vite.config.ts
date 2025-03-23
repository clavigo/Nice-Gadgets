import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: 'dist',
  // },
  // base: '/Nice-Gadgets/',
  base: process.env.NODE_ENV === 'production' ? '/react_phone-catalog/' : '/',
  build: {
    rollupOptions: {
      input: '/src/index.tsx',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/utils/scss/variables"; @import "@/utils/scss/mixin";`,
  //     },
  //   },
  // },
});
