import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // or your preferred port
  },
  build: {
    outDir: 'build', // CRA uses 'build' for the output directory
  },
});
