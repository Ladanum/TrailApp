const CACHE_NAME = 'trail-app-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        // If some assets fail, continue anyway
        return cache.addAll(STATIC_ASSETS.filter(url => url !== '/'));
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Don't cache POST/PUT/DELETE requests
  if (request.method !== 'GET') {
    return;
  }

  // For index.html: always try network first for fresh updates
  if (url.pathname === '/' || url.pathname === '/index.html') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            // Cache the fresh version
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // If offline, return cached version
          return caches.match(request).then(cached => {
            return cached || caches.match('/index.html');
          });
        })
    );
    return;
  }

  // Don't cache supabase API calls (always fetch fresh)
  if (url.hostname.includes('supabase.co')) {
    event.respondWith(
      fetch(request).catch(() => {
        // If offline and no cache, return offline page
        return caches.match('/index.html');
      })
    );
    return;
  }

  // For everything else: cache first, then network
  event.respondWith(
    caches.match(request).then(response => {
      if (response) {
        return response;
      }

      return fetch(request).then(response => {
        // Don't cache non-200 responses
        if (!response || response.status !== 200) {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Cache successful responses
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseToCache);
        });

        return response;
      }).catch(() => {
        // Offline: return cached or index.html
        return caches.match(request).then(cached => {
          return cached || caches.match('/index.html');
        });
      });
    })
  );
});
