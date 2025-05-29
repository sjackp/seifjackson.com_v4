// Simple development server for the Vercel-ready portfolio
import { spawn } from 'child_process';

// Start Vite development server
const vite = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true
});

vite.on('error', (err) => {
  console.error('Failed to start Vite dev server:', err);
});

process.on('SIGINT', () => {
  vite.kill();
  process.exit();
});