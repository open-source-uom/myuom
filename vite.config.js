import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  // Chunk js files by components for less overhead
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router"],
          "vendor-chakra": ["@chakra-ui/react", "@chakra-ui/icons", "@emotion/react", "@emotion/styled", "framer-motion"],
          "vendor-i18n": ["i18next", "react-i18next"],
          "vendor-icons": ["react-icons", "react-social-icons"],
          "vendor-swiper": ["swiper"],
          "vendor-markdown": ["react-markdown"],
        }
      }
    }
  }
})