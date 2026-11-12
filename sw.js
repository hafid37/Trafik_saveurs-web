// Service Worker for Trafik Saveurs PWA
const CACHE_NAME = 'trafik-saveurs-v1.1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './xlsx.full.min.js',
  './manifest.json',
  './favicon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg',
  './icons/apple-touch-icon.png',
  './templates/products_template.xlsx',
  './templates/invoices_template.xlsx',
  './templates/all_in_one_template.xlsx',
  './templates/نموذج_المنتجات_Trafik_Saveurs.xlsx',
  './templates/نموذج_الفواتير_Trafik_Saveurs.xlsx',
  './templates/نموذج_شامل_المنتجات_والفواتير_Trafik_Saveurs.xlsx',
  './templates/نموذج_المنتجات.csv',
  './templates/نموذج_الفواتير.csv'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Some cache assets failed to preload:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Fetch in background to update cache (stale-while-revalidate for html/js/css)
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
          }
        }).catch(() => {/* offline */});
        return cachedResponse;
      }
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        // If offline and request is for navigation, return cached index.html
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
