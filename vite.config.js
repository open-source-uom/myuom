import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- ✅ Add this line

export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.md'],
    server: {
        port: 3000,
        open: true,
        host: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
        },
    },
})
