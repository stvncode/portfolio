import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react'],
    },
  },
  server: {
    host: true,
  },
  plugins: [checker({ typescript: true }), react(), svgr(), tsconfigPaths()],
})
