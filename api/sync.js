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
      // Load data
      const userId = req.query.userId;
      if (!userId) {
        return res.status(400).json({ error: 'userId required' });
      }

      const url = `${supabaseUrl}/rest/v1/user_data?user_id=eq.${encodeURIComponent(userId)}`;
      console.log('Fetching:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      return res.status(response.status).json(data);
    } else if (req.method === 'POST') {
      // Upsert data
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

      const url = `${supabaseUrl}/rest/v1/user_data`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      return res.status(response.status).json(data);
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Sync error:', error);
    return res.status(500).json({
      error: error.message || 'Internal server error',
      details: error.toString(),
      stack: error.stack
    });
  }
}
