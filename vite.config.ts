import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-learn',
  build: {
    sourcemap: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify("1.0.0"),
  },
  publicDir: "public",
  envDir: 'env'
})