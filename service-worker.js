const CACHE_NAME = "simplelearn-cache-v1";

const urlsToCache = [
"/",
"/index.html",
"/departments.html",
"/subjects.html",
"/lesson.html",
"/style.css",
"/script.js"
];

self.addEventListener("install", function(event){

event.waitUntil(

caches.open(CACHE_NAME)

.then(function(cache){

return cache.addAll(urlsToCache);

})

);

});

self.addEventListener("fetch", function(event){

event.respondWith(

caches.match(event.request)

.then(function(response){

return response || fetch(event.request);

})

);

});