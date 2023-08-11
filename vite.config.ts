import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        preconnect: false,
        families: [
          'Barriecito', 'Schoolbell', 'Basic', 'Gafata', 'Harmattan'
        ],
      },
    }),
  ],
  server: {
    open: "/plan-front",
    port: 1000,
  },
  base: "/plan-front"
})
