'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "52b1cf123e0d326c5ea492a411ef7991",
"assets/AssetManifest.bin.json": "d9973fc7b6456cc9946729391db5986f",
"assets/AssetManifest.json": "fcd9fe34c1e2a4329c3275f086e5a266",
"assets/assets/fonts/inter_fonts/Inter-V.ttf": "8d63a82f5fc6d6eba21050dd9111520d",
"assets/assets/images/An-edge-through-better-modelling-min-2.png": "47d4eac586df266dacb923af67439742",
"assets/assets/images/football-stadium-night.jpg": "b876f8058bd42324a80e65a059f814ea",
"assets/assets/images/home.png": "fa5a9061c8bfcb1716ebcf0d1527ac19",
"assets/assets/images/messi.jpg": "8c2120a4dc5fefc9d9b8da35eaaf7162",
"assets/assets/images/Ronaldo.jpg": "4940cbe6e0612c53805e684a76898683",
"assets/assets/images/SB%2520-%2520Core%2520Icon%2520-%2520Mono%2520White.png": "8ad071720d3cbe3f390d731bd20a277f",
"assets/assets/images/SB%2520-%2520Tag%2520lockup%2520-%2520Colour%2520positive.jpg": "17f11e1619ec67acbc3b6291f252774a",
"assets/assets/images/SB%2520-%2520Tag%2520lockup%2520-%2520Colour%2520positive.png": "408ad778e05bc73da74e2aa2742c6ce3",
"assets/assets/images/soccer_ball_net.jpg": "1b5214339927c37936d9311af7b227af",
"assets/assets/images/statsbomb-color-radar.png": "47923b298228e0a0a62a6f1cde7855a4",
"assets/assets/images/statsBomb-dataChampions-monoBlack.png": "a9c3e5bae9ba473b9510c1f68b2a1211",
"assets/assets/images/statsbomb-red-text.jpg": "7d5b9f45c8eb7d0a7aa9c27387aa0b7e",
"assets/assets/images/Wave_Texture_BrandIcon-min-scaled.jpg": "4e028f81f5cb4d7f429e50a6c534e488",
"assets/assets/images/Wing_Texture_Grey1-min-scaled.jpg": "cdad29f2fbf6a0354f9058e6d64ff885",
"assets/assets/images/zidane.jpg": "c00be13b987becf786e30577e0e952d4",
"assets/FontManifest.json": "88b2c40ccce813590f7687bd34fcc12b",
"assets/fonts/MaterialIcons-Regular.otf": "032ab415264e60a1bc4a749f02ec5da9",
"assets/NOTICES": "1615ebef10dd50e6fb4592bc1d00dadc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "fe1e5fbef6409fecc878e0cbdcf3b562",
"canvaskit/canvaskit.wasm": "53f54a6449129dcba94ff26fa5488cf2",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "2be9dcced9c492f1f1e475aa9ccf511f",
"canvaskit/chromium/canvaskit.wasm": "26c5ab26b384a8c52d0ba93d23596723",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "e03a50cb20ff6c262729d11295ac5454",
"canvaskit/skwasm.wasm": "feeb27aea29a9e626a87f2dac168933a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b723c331588b004c2d3176467e2886b4",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0d3a8ceb31128aa36e5310cbadd05c53",
"/": "0d3a8ceb31128aa36e5310cbadd05c53",
"main.dart.js": "a66856600977d707017ed9ff0f688ef4",
"manifest.json": "37444b33de8e7995bb0a4deb91618dc0",
"version.json": "8845e224ad1e9307205bd4bef17f3dff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
