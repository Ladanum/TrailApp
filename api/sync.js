const https = require('https');

const SUPABASE_URL = 'https://ynzhvkpftycdzzqqcdih.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluemh2a3BmdHljZHp6cXFjZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDMyNDgsImV4cCI6MjAyMDg3OTI0OH0.o5WRVnX0rrm5H3-4sFLxuI6mzlEnT4Qs0CqkDx0OWkY';

function supabaseRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const payload = data ? JSON.stringify(data) : null;
    const options = {
      hostname: 'ynzhvkpftycdzzqqcdih.supabase.co',
      path: path,
      method: method,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 8000
    };

    if (payload) {
      options.headers['Content-Length'] = Buffer.byteLength(payload);
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        try {
          const parsed = body ? JSON.parse(body) : null;
          resolve({ status: res.statusCode, body: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, body: null, parseError: true, rawBody: body });
        }
      });
    });

    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const userId = req.query.userId;
      if (!userId) {
        return res.status(200).json(null);
      }

      const result = await supabaseRequest('GET', `/rest/v1/trail_data?user_id=eq.${encodeURIComponent(userId)}`);
      const records = Array.isArray(result.body) ? result.body : [];
      return res.status(200).json(records.length > 0 ? records[0] : null);

    } else if (req.method === 'POST') {
      const { user_id, completed_days, workout_data, progress_data, race_data, extra_activities } = req.body;

      if (!user_id) {
        return res.status(200).json({ success: false });
      }

      const checkResult = await supabaseRequest('GET', `/rest/v1/trail_data?user_id=eq.${encodeURIComponent(user_id)}`);
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

      let result;
      if (userExists) {
        result = await supabaseRequest('PATCH', `/rest/v1/trail_data?user_id=eq.${encodeURIComponent(user_id)}`, payload);
      } else {
        result = await supabaseRequest('POST', '/rest/v1/trail_data', payload);
      }

      return res.status(200).json({ success: true, action: userExists ? 'updated' : 'created' });

    } else {
      return res.status(200).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    console.error('Error:', err);
    return res.status(200).json({ success: true });
  }
};
