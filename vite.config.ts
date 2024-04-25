import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { checker } from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://vite-plugin-checker.netlify.app/introduction/getting-started.html
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '~app',
        replacement: resolve(__dirname, 'src/0_app'),
      },
      {
        find: '~pages',
        replacement: resolve(__dirname, 'src/1_pages'),
      },
      {
        find: '~widgets',
        replacement: resolve(__dirname, 'src/2_widgets'),
      },
      {
        find: '~features',
        replacement: resolve(__dirname, 'src/3_features'),
      },
      {
        find: '~entities',
        replacement: resolve(__dirname, 'src/4_entities'),
      },
      {
        find: '~shared',
        replacement: resolve(__dirname, 'src/5_shared'),
      },

      // TODO: remove this alias after full FSD integration
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    watch: {
      // https://github.com/vitejs/vite/issues/1153
      usePolling: true,
    },
  },
})
