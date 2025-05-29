import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      'c043ed03-3ed9-4912-b6ef-06f2f5007d92-00-3qez9vrlgrto4.worf.replit.dev'
    ]
  }
});