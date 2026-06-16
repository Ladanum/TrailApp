const https = require('https');

const SUPABASE_URL = 'https://ynzhvkpftycdzzqqcdih.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluemh2a3BmdHljZHp6cXFjZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDMyNDgsImV4cCI6MjAyMDg3OTI0OH0.o5WRVnX0rrm5H3-4sFLxuI6mzlEnT4Qs0CqkDx0OWkY';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const userId = req.query.userId;
      if (!userId) {
        return res.status(400).json({ error: 'userId required' });
      }

      return new Promise((resolve) => {
        const queryPath = `/rest/v1/user_data?user_id=eq.${encodeURIComponent(userId)}`;
        const options = {
          hostname: 'ynzhvkpftycdzzqqcdih.supabase.co',
          path: queryPath,
          method: 'GET',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json'
          }
        };

        const request = https.request(options, (response) => {
          let data = '';
          response.on('data', chunk => { data += chunk; });
          response.on('end', () => {
            try {
              const parsed = JSON.parse(data || '[]');
              const records = Array.isArray(parsed) ? parsed : [];
              res.status(200).json(records.length > 0 ? records[0] : null);
            } catch (e) {
              console.error('Parse error:', e, 'data:', data);
              res.status(500).json({ error: 'Parse error' });
            }
            resolve();
          });
        });

        request.on('error', (e) => {
          console.error('Request error:', e);
          res.status(500).json({ error: e.message });
          resolve();
        });

        request.end();
      });
    }

    else if (req.method === 'POST') {
      const { user_id, completed_days, workout_data, progress_data, race_data, extra_activities } = req.body;

      if (!user_id) {
        return res.status(400).json({ error: 'user_id required' });
      }

      const payload = JSON.stringify({
        user_id,
        completed_days,
        workout_data,
        progress_data,
        race_data,
        extra_activities,
        updated_at: new Date().toISOString()
      });

      return new Promise((resolve) => {
        const options = {
          hostname: 'ynzhvkpftycdzzqqcdih.supabase.co',
          path: '/rest/v1/user_data',
          method: 'POST',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates',
            'Content-Length': Buffer.byteLength(payload)
          }
        };

        const request = https.request(options, (response) => {
          let data = '';
          response.on('data', chunk => { data += chunk; });
          response.on('end', () => {
            res.status(response.statusCode).json({ success: response.statusCode < 300 });
            resolve();
          });
        });

        request.on('error', (e) => {
          console.error('Request error:', e);
          res.status(500).json({ error: e.message });
          resolve();
        });

        request.write(payload);
        request.end();
      });
    }

    else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ error: error.message });
  }
};
