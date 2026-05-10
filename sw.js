
                const CACHE_NAME='pwa_pro_by_adi-v1777395818767';
                const ASSETS=["./","./manifest.json","./icon-512.png","./sw.js","./internal_assets/jszip.min.js","./internal_assets/confetti.browser.min.js","./index.html"];
                self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
                self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
                self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(res=>res||fetch(e.request))));
                self.addEventListener('push', e => {
                    const data = e.data ? e.data.json() : { title: 'PWA PRO BY ADI', body: 'New Update Available' };
                    e.waitUntil(self.registration.showNotification(data.title, { body: data.body, icon: 'icon-512.png' }));
                });