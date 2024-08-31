import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React-Login-and-service-Page-Dribble-design-/',
  build: {
    outDir: 'dist', // Ensure this is where the build output is stored
  },
})
