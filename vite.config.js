import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/tanivoice/",  // Sesuaikan dengan nama repo
  plugins: [react()],
});
