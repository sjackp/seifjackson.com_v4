// Development server to test API endpoints locally
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Import and mount API handlers
import healthHandler from './health.js';
import githubHandler from './github.js';

// Convert Vercel handlers to Express middleware
const createExpressHandler = (vercelHandler: any) => {
  return async (req: any, res: any) => {
    try {
      await vercelHandler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

app.get('/api/health', createExpressHandler(healthHandler));
app.get('/api/github', createExpressHandler(githubHandler));

app.listen(PORT, () => {
  console.log(`Development API server running on http://localhost:${PORT}`);
});