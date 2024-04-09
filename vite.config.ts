import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

dotenv.config();
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': new URL('./src/', import.meta.url).pathname,
      '@Assets': new URL('./src/assets/', import.meta.url).pathname,
      '@Utils': new URL('./src/utils/', import.meta.url).pathname,
      '@Store': new URL('./src/store/', import.meta.url).pathname,
      '@Hooks': new URL('./src/hooks/', import.meta.url).pathname,
      '@Api': new URL('./src/api/', import.meta.url).pathname,
      '@Services': new URL('./src/services/', import.meta.url).pathname,
      '@Constants': new URL('./src/constants/', import.meta.url).pathname,
      '@Routes': new URL('./src/routes/', import.meta.url).pathname,
      '@Views': new URL('./src/views/', import.meta.url).pathname,
      '@Components': new URL('./src/components/', import.meta.url).pathname,
    },
  },
  define: {
    'process.env': {
      BASE_URL: process.env.BASE_URL,
      API_URL_V1: process.env.API_URL_V1,
    },
  },
  server: {
    open: true,
    port: 3040,
  },
});
