// Simple development server that just runs Vite
import { spawn } from 'child_process';

console.log('Starting Vite development server...');

const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  cwd: 'client',
  stdio: 'inherit',
  shell: true
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
});

process.on('SIGINT', () => {
  vite.kill();
  process.exit();
});