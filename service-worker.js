const CACHE_NAME = 'shooting-game-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/background.png',
  '/images/turret.png',
  '/images/bullet.png',
  '/images/enemy_normal.png',
  '/images/enemy_fast.png',
  '/images/enemy_big.png',
  '/images/enemy_small.png',
  '/images/item_speed.png',
  '/images/item_fireRate.png',
  '/images/item_bulletSpeed.png',
  '/images/item_energy.png',
  '/images/item_bomb.png',
  '/images/explosion.png',
  '/images/start_screen.png',
  '/images/game_over_screen.png',
  '/images/turret_explosion.png',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  '/bgm/bgm.mp3'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});