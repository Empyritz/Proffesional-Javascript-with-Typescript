const VERSION = 'v1'


// self.addEventListener('install', (event)=>{
//   event.waitUntil(precache())
// })

self.addEventListener('fetch', (event) => {
  const request = event.request
  // get
  if(request.method !== 'GET') {
    return
  }
  // debugger
  
  //Buscar en cache
  // debugger
  event.respondWith(cachedResponse(request))

  //Actualizar el cache 
  event.waitUntil(updatedCache(request))
})

// async function precache() {
//   const cache = await caches.open(VERSION)
//   return cache.addAll ([
//     // '/',
//     // '/index.html',
//     // '/assets/index.js',
//     // '/assets/MediaPlayer.js',
//     // '/assets/plugins/AutoPlay.js',
//     // '/assets/plugins/AutoPause.js',
//     // '/assets/index.css',
//     // '/assets/Joe-Hisaishi-One-Summers-Day.mp4',
//   ])
// }

async function updatedCache(request) {
  const cache = await caches.open(VERSION)
  const response = await fetch(request)
  // debugger
  // debugger
  // console.log(request)
  // debugger
  // console.log(response)
  return cache.put(request, response)
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  // debugger
  // console.log(request)
  return response || fetch(request)
}



