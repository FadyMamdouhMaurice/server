'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b696d3105811886c6f718b4c1a10e943",
"assets/AssetManifest.bin.json": "31722d867d1ce8a43f650431a9c8ed51",
"assets/AssetManifest.json": "e036e6fa5ccf0ac0e194645c54af9467",
"assets/assets/fonts/inter_fonts/Inter-V.ttf": "8d63a82f5fc6d6eba21050dd9111520d",
"assets/assets/images/An-edge-through-better-modelling-min-2.png": "47d4eac586df266dacb923af67439742",
"assets/assets/images/bg.jpeg": "d355d342538055db63d1955cd15a1247",
"assets/assets/images/football-award.png": "b95265d2e5983a4fd1657007927d9af0",
"assets/assets/images/football-player.png": "7c7e672bceb26fe43f29ceff32d0fb48",
"assets/assets/images/football-stadium-night.jpg": "b876f8058bd42324a80e65a059f814ea",
"assets/assets/images/football.png": "a3498266e8dedba0d4b40f09ae10414e",
"assets/assets/images/home.png": "fa5a9061c8bfcb1716ebcf0d1527ac19",
"assets/assets/images/messi.jpg": "8c2120a4dc5fefc9d9b8da35eaaf7162",
"assets/assets/images/Ronaldo.jpg": "4940cbe6e0612c53805e684a76898683",
"assets/assets/images/SB%2520-%2520Core%2520Icon%2520-%2520Mono%2520White.png": "8ad071720d3cbe3f390d731bd20a277f",
"assets/assets/images/SB%2520-%2520Tag%2520lockup%2520-%2520Colour%2520positive.jpg": "17f11e1619ec67acbc3b6291f252774a",
"assets/assets/images/SB%2520-%2520Tag%2520lockup%2520-%2520Colour%2520positive.png": "408ad778e05bc73da74e2aa2742c6ce3",
"assets/assets/images/shoot.png": "a8c31a0c1c65ad34d409efaafc190388",
"assets/assets/images/soccer-player.png": "191533c1fb51d2908b383533a3621dfe",
"assets/assets/images/soccer_ball_net.jpg": "1b5214339927c37936d9311af7b227af",
"assets/assets/images/statsbomb-color-radar.png": "47923b298228e0a0a62a6f1cde7855a4",
"assets/assets/images/statsBomb-dataChampions-monoBlack.png": "a9c3e5bae9ba473b9510c1f68b2a1211",
"assets/assets/images/statsbomb-red-text.jpg": "7d5b9f45c8eb7d0a7aa9c27387aa0b7e",
"assets/assets/images/Wave_Texture_BrandIcon-min-scaled.jpg": "4e028f81f5cb4d7f429e50a6c534e488",
"assets/assets/images/Wing_Texture_Grey1-min-scaled.jpg": "cdad29f2fbf6a0354f9058e6d64ff885",
"assets/assets/images/zidane.jpg": "c00be13b987becf786e30577e0e952d4",
"assets/FontManifest.json": "88b2c40ccce813590f7687bd34fcc12b",
"assets/fonts/MaterialIcons-Regular.otf": "fae23837dd0a7b3d6149d5918910666d",
"assets/NOTICES": "67429a0d71aa6db5a225c626c8683ed5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.js.symbols": "83ad552fe7b7cc8ee8311f60941e02f5",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.js.symbols": "4ba8d2a0ca33a008c2716df1c4d4bebc",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.js.symbols": "8bd6b02debe4cb77998782baa1eed362",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b723c331588b004c2d3176467e2886b4",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a260eea3cd297799cf7a6aff5f4a30f9",
"/": "a260eea3cd297799cf7a6aff5f4a30f9",
"main.dart.js": "d3d62d62d5cd84267c04d47bc502a000",
"manifest.json": "e5cb11bcf09947a1a03780ba731915d9",
"version.json": "8845e224ad1e9307205bd4bef17f3dff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
