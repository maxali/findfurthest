self.addEventListener('install', function(event) {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();

  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
});

self.addEventListener('fetch', function(event) {
  // Optionally respond to requests for the root page with the page from the offline cache.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request.url).catch(error => {
        return caches.match('offline.html');
      })
    );
  }
});
