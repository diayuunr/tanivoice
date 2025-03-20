import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tanivoice/', // Tambahkan ini sesuai dengan nama repository-mu
})
