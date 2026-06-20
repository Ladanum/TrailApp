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
        resolve({ status: res.statusCode, body: body });
      });
    });

    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  try {
    // Test: Get table structure
    const result = await supabaseRequest('GET', '/rest/v1/user_data?limit=1');

    return res.status(200).json({
      status: result.status,
      message: 'Debug info',
      body: result.body
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
