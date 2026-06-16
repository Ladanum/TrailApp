const https = require('https');
const { URL } = require('url');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const SUPABASE_URL = 'https://ynzhvkpftycdzzqqcdih.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluemh2a3BmdHljZHp6cXFjZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDMyNDgsImV4cCI6MjAyMDg3OTI0OH0.o5WRVnX0rrm5H3-4sFLxuI6mzlEnT4Qs0CqkDx0OWkY';

  try {
    if (req.method === 'GET') {
      const userId = req.query.userId;
      if (!userId) {
        return res.status(400).json({ error: 'userId required' });
      }

      return new Promise((resolve) => {
        const url = new URL(`${SUPABASE_URL}/rest/v1/user_data?user_id=eq.${encodeURIComponent(userId)}`);
        https.get({
          hostname: url.hostname,
          path: url.pathname + url.search,
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json'
          }
        }, (response) => {
          let data = '';
          response.on('data', chunk => { data += chunk; });
          response.on('end', () => {
            try {
              const parsed = JSON.parse(data || '[]');
              res.status(response.statusCode).json(parsed);
            } catch (e) {
              res.status(500).json({ error: 'Parse error', data });
            }
            resolve();
          });
        }).on('error', (e) => {
          res.status(500).json({ error: e.message });
          resolve();
        });
      });
    } else if (req.method === 'POST') {
      const postData = JSON.stringify(req.body);
      return new Promise((resolve) => {
        const url = new URL(`${SUPABASE_URL}/rest/v1/user_data`);
        const request = https.request({
          hostname: url.hostname,
          path: url.pathname,
          method: 'POST',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates',
            'Content-Length': Buffer.byteLength(postData)
          }
        }, (response) => {
          let data = '';
          response.on('data', chunk => { data += chunk; });
          response.on('end', () => {
            try {
              const parsed = JSON.parse(data || '{}');
              res.status(response.statusCode).json(parsed);
            } catch (e) {
              res.status(500).json({ error: 'Parse error', data });
            }
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
    res.status(500).json({ error: error.message || 'Unknown error' });
  }
};
