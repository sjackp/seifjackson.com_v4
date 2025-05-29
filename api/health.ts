import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  return res.status(200).json({ 
    status: 'ok', 
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString()
  });
}