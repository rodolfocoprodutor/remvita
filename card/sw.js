self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "./src/main.css", "./assets/logo192.png", "./assets/logo512.png", "./assets/profile-aircard.png" "./assets/i.svg"])
    })
  )
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e,request);
    })
  );
});