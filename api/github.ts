import { VercelRequest, VercelResponse } from '@vercel/node';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://api.github.com/users/sjackp/repos?sort=updated&per_page=6');
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const repos: GitHubRepo[] = await response.json();

    // Set CORS headers for development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    return res.status(200).json(repos);
  } catch (error) {
    console.error('GitHub API error:', error);
    return res.status(500).json({ 
      message: 'Failed to fetch repositories',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}