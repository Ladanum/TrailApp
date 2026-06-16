import https from 'https';
import { URL } from 'url';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const supabaseUrl = 'https://ynzhvkpftycdzzqqcdih.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluemh2a3BmdHljZHp6cXFjZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDMyNDgsImV4cCI6MjAyMDg3OTI0OH0.o5WRVnX0rrm5H3-4sFLxuI6mzlEnT4Qs0CqkDx0OWkY';

  try {
    if (req.method === 'GET') {
      const userId = req.query.userId;
      if (!userId) {
        return res.status(400).json({ error: 'userId required' });
      }

      const url = new URL(`${supabaseUrl}/rest/v1/user_data?user_id=eq.${encodeURIComponent(userId)}`);
      return new Promise((resolve) => {
        https.get({
          hostname: url.hostname,
          path: url.pathname + url.search,
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json'
          }
        }, (response) => {
          let data = '';
          response.on('data', chunk => data += chunk);
          response.on('end', () => {
            res.status(response.statusCode).json(JSON.parse(data || '[]'));
            resolve();
          });
        }).on('error', (e) => {
          res.status(500).json({ error: e.message });
          resolve();
        });
      });
    } else if (req.method === 'POST') {
      const body = req.body;
      const url = new URL(`${supabaseUrl}/rest/v1/user_data`);
      const postData = JSON.stringify(body);

      return new Promise((resolve) => {
        const request = https.request({
          hostname: url.hostname,
          path: url.pathname,
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates',
            'Content-Length': Buffer.byteLength(postData)
          }
        }, (response) => {
          let data = '';
          response.on('data', chunk => data += chunk);
          response.on('end', () => {
            res.status(response.statusCode).json(JSON.parse(data || '{}'));
            resolve();
          });
        }).on('error', (e) => {
          res.status(500).json({ error: e.message });
          resolve();
        });

        request.write(postData);
        request.end();
      });
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Sync error:', error);
    return res.status(500).json({ error: error.message });
  }
}
