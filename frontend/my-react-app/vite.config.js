import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",   // 👈 IMPORTANT
    port: 5173,        // optional (default bhi 5173 hota hai)
    strictPort: true
  }
});
