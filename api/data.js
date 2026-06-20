const https = require('https');

const SUPABASE_URL = 'https://ynzhvkpftycdzzqqcdih.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluemh2a3BmdHljZHp6cXFjZGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDMyNDgsImV4cCI6MjAyMDg3OTI0OH0.o5WRVnX0rrm5H3-4sFLxuI6mzlEnT4Qs0CqkDx0OWkY';

function request(method, path, data) {
  return new Promise((resolve, reject) => {
    const payload = data ? JSON.stringify(data) : null;
    const opts = {
      hostname: 'ynzhvkpftycdzzqqcdih.supabase.co',
      path: path,
      method: method,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      }
    };
    if (payload) opts.headers['Content-Length'] = Buffer.byteLength(payload);

    const req = https.request(opts, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch {
          resolve({ status: res.statusCode, body: null });
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
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    const uid = req.query.userId;
    const r = await request('GET', `/rest/v1/trail_data?user_id=eq.${uid}`);
    const rows = Array.isArray(r.body) ? r.body : [];
    return res.json(rows[0] || null);
  }

  if (req.method === 'POST') {
    const { user_id, completed_days, workout_data, progress_data, race_data, extra_activities } = req.body;
    const r = await request('GET', `/rest/v1/trail_data?user_id=eq.${user_id}`);
    const exists = Array.isArray(r.body) && r.body.length > 0;

    const payload = { user_id, completed_days, workout_data, progress_data, race_data, extra_activities, updated_at: new Date().toISOString() };

    if (exists) {
      await request('PATCH', `/rest/v1/trail_data?user_id=eq.${user_id}`, payload);
    } else {
      await request('POST', '/rest/v1/trail_data', payload);
    }
    return res.json({ success: true });
  }

  res.json({ ok: true });
};
