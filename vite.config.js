import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: '**/*.jsx' }),

    // eslint()
  ],

  server: {
    https: false,
    port: 3030,
  },
});
