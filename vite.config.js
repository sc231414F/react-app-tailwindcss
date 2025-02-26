import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server:{
    port: 9001, //puerto escucha
    host: true, // permitir visibilidad en red
    allowedHosts: true // permitir conexiones en red
  }
})
