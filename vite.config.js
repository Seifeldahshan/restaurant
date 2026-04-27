import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Enable SPA fallback so /menu and /admin work with client-side routing
    historyApiFallback: true,
  },
})
