import { defineConfig, createLogger, LogOptions } from 'vite'
import react from '@vitejs/plugin-react'

const customLogger = createLogger();

const info = customLogger.info;

customLogger.info = (msg: string, options: LogOptions) => {
    info(`🔥🔥🔥-${msg}`, options);
}


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
  customLogger,
  envDir: 'env'
})