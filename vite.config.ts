import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rnk-portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // ADD THIS LINE FOR DEPLOYMENT TO GITHUB PAGES OR SIMILAR SUBPATH HOSTING
   // <--- IMPORTANT: Replace 'portfolio' with your actual GitHub repository name
});