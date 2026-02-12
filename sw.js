// Minimal Service Worker to satisfy PWA installation requirements
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Just pass requests through normally
  e.respondWith(fetch(e.request));
});
