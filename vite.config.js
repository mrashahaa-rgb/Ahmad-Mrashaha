// vite.config.js
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // This securely replaces process.env.API_KEY with the environment variable from Vercel during build time.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
});
