const https = require('https');

const SUPABASE_URL = 'https://ynzhvkpftycdzzqqcdih.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluemh2a3BmdHljZHp6cXFjZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDMyNDgsImV4cCI6MjAyMDg3OTI0OH0.o5WRVnX0rrm5H3-4sFLxuI6mzlEnT4Qs0CqkDx0OWkY';

function supabaseGet(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'ynzhvkpftycdzzqqcdih.supabase.co',
      path: path,
      method: 'GET',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 5000
    };

    https.get(options, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body: null, parseError: true });
        }
      });
    }).on('error', reject);
  });
}

function supabasePost(path, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const options = {
      hostname: 'ynzhvkpftycdzzqqcdih.supabase.co',
      path: path,
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 5000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body: null });
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

module.exports = async (req, res) => {
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

      const result = await supabaseGet(`/rest/v1/user_data?user_id=eq.${encodeURIComponent(userId)}`);

      if (result.status >= 400) {
        return res.status(result.status).json({ error: 'Supabase error' });
      }

      const records = Array.isArray(result.body) ? result.body : [];
      return res.status(200).json(records.length > 0 ? records[0] : null);

    } else if (req.method === 'POST') {
      const { user_id, completed_days, workout_data, progress_data, race_data, extra_activities } = req.body;

      if (!user_id) {
        return res.status(400).json({ error: 'user_id required' });
      }

      // First check if user exists
      const checkResult = await supabaseGet(`/rest/v1/user_data?user_id=eq.${encodeURIComponent(user_id)}&select=id`);
      const userExists = Array.isArray(checkResult.body) && checkResult.body.length > 0;

      const payload = {
        user_id,
        completed_days,
        workout_data,
        progress_data,
        race_data,
        extra_activities,
        updated_at: new Date().toISOString()
      };

      const result = userExists
        ? await supabasePost(`/rest/v1/user_data?user_id=eq.${encodeURIComponent(user_id)}`, payload)
        : await supabasePost('/rest/v1/user_data', payload);

      return res.status(200).json({ success: true, action: userExists ? 'updated' : 'created' });

    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: err.message });
  }
};
