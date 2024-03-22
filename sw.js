const CACHE_NAME = 'food-app-hs-cache';

const urlsToCache = [
  '/',
  '/fonts/bootstrap-icons.woff',
  '/fonts/bootstrap-icons.woff2',
  '/icons/favicon.ico',
  '/icons/favicon-32x32.png',
  '/icons/favicon-16x16.png',
  '/js/jquery.min.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = ['food-app-hs-cache'];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
