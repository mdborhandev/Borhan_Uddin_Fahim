const CACHE = 'borhan-portfolio-v1';
const urlsToCache = [
  '/index.html',
  '/assets/css/main.css',
  '/assets/vendor/bootstrap/css/bootstrap.min.css',
  '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
  '/assets/vendor/aos/aos.css',
  '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
  '/assets/vendor/aos/aos.js',
  '/assets/img/Borhan.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(urlsToCache)));
  self.skipWaiting();
});

self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).catch(() => null))
  );
});
