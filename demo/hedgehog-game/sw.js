const CACHE = 'pg-1792762116056';
const FILES = ["./","./assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","./assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","./assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","./assets/garden-backdrop-v1.webp","./assets/index-DZmnQKRD.js","./assets/index-FPwa3Lhs.css","./assets/nunito-sans-cyrillic-ext-wght-italic-BpOYgEhF.woff2","./assets/nunito-sans-cyrillic-ext-wght-normal-7w74d1lj.woff2","./assets/nunito-sans-cyrillic-wght-italic-BTGUQAkP.woff2","./assets/nunito-sans-cyrillic-wght-normal-B9hoeQUC.woff2","./assets/nunito-sans-latin-ext-wght-italic-Cf7cROU4.woff2","./assets/nunito-sans-latin-ext-wght-normal-DMEAsnHD.woff2","./assets/nunito-sans-latin-wght-italic-B3URO7Ca.woff2","./assets/nunito-sans-latin-wght-normal-BWQ3gi2K.woff2","./assets/nunito-sans-vietnamese-wght-italic-BzAMfQ4d.woff2","./assets/nunito-sans-vietnamese-wght-normal-BhFYcaJr.woff2","./icons/icon-180.png","./icons/icon-192.png","./icons/icon-512.png","./index.html","./manifest.webmanifest"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true, ignoreVary: true }).then((r) => r || fetch(e.request)));
});
