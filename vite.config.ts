import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Enables JSX transformation and Fast Refresh during development.
  plugins: [react()],
})
