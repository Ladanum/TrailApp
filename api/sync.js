const https = require('https');
const { URL } = require('url');

const SUPABASE_URL = 'https://ynzhvkpftycdzzqqcdih.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluemh2a3BmdHljZHp6cXFjZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDMyNDgsImV4cCI6MjAyMDg3OTI0OH0.o5WRVnX0rrm5H3-4sFLxuI6mzlEnT4Qs0CqkDx0OWkY';

function supabaseRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(SUPABASE_URL + path);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: method,
      timeout: 8000,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      }
    };

    if (method === 'POST' || method === 'PATCH') {
      options.headers['Prefer'] = 'return=representation';
      if (body) {
        options.headers['Content-Length'] = Buffer.byteLength(body);
      }
    }

    const request = https.request(options, (response) => {
      let data = '';
      response.on('data', chunk => { data += chunk; });
      response.on('end', () => {
        try {
          const parsed = data ? JSON.parse(data) : null;
          resolve({ status: response.statusCode, data: parsed, error: null });
        } catch (e) {
          resolve({ status: response.statusCode, data: null, error: 'Parse error: ' + e.message });
        }
      });
    });

    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Supabase request timeout'));
    });

    request.on('error', (e) => {
      reject(e);
    });

    if (body) {
      request.write(body);
    }
    request.end();
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }

  try {
    if (req.method === 'GET') {
      const userId = req.query.userId;
      if (!userId) {
        return res.status(400).json({ error: 'userId required' });
      }

      try {
        const result = await supabaseRequest('GET', `/rest/v1/user_data?user_id=eq.${encodeURIComponent(userId)}&select=*`);
        if (result.error) {
          return res.status(500).json({ error: result.error });
        }
        const records = Array.isArray(result.data) ? result.data : [];
        return res.status(200).json(records.length > 0 ? records[0] : null);
      } catch (e) {
        console.error('GET error:', e);
        return res.status(500).json({ error: e.message });
      }
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

      try {
        // First try to get existing record
        const getResult = await supabaseRequest('GET', `/rest/v1/user_data?user_id=eq.${encodeURIComponent(user_id)}&select=id`);

        if (getResult.data && Array.isArray(getResult.data) && getResult.data.length > 0) {
          // Record exists, update it
          const recordId = getResult.data[0].id;
          const updateResult = await supabaseRequest('PATCH', `/rest/v1/user_data?id=eq.${recordId}`, payload);
          return res.status(200).json({ success: true, action: 'updated', data: updateResult.data });
        } else {
          // Record doesn't exist, insert it
          const insertResult = await supabaseRequest('POST', '/rest/v1/user_data', payload);
          return res.status(201).json({ success: true, action: 'inserted', data: insertResult.data });
        }
      } catch (e) {
        console.error('POST error:', e);
        return res.status(500).json({ error: e.message });
      }
    }

    else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ error: error.message || 'Unknown error' });
  }
};
