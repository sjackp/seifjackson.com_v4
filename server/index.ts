import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

const app = express();

async function createServer() {
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
    root: path.resolve(process.cwd(), 'client')
  });

  // Add API routes for development
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/api/github', async (req, res) => {
    try {
      const response = await fetch('https://api.github.com/users/sjackp/repos?sort=updated&per_page=6');
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      const repos = await response.json();
      res.json(repos);
    } catch (error) {
      console.error('GitHub API error:', error);
      res.status(500).json({ 
        message: 'Failed to fetch repositories',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Use vite's connect instance as middleware
  app.use(vite.ssrFixStacktrace);
  app.use(vite.middlewares);

  const port = parseInt(process.env.PORT || '5000');
  app.listen(port, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${port}`);
  });
}

createServer().catch(console.error);