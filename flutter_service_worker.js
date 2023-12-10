'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c6343ad8932a7ed26f579f8a074a146a",
".git/config": "80a0828402c94f86fe2c1cd34df43f13",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "557aa09576286b20e9b461650b369a3c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "52ef8df53771caf4273c6f803227979f",
".git/logs/refs/heads/master": "52ef8df53771caf4273c6f803227979f",
".git/logs/refs/remotes/origin/master": "d0820a632eb5b0bb06ec64365767781b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/8896ec8b2e471647836d4611386ccefd7fb2b5": "c6088a4362891a33e22c25e2d1decf13",
".git/objects/06/c11b4d1554d1b3b0b05bdbf40af1bc8f172e84": "a443d9c6980a091df25e7310327e8a6c",
".git/objects/12/cf443df63786688d9a4e3661ff3de00ce6e5d2": "ef14a364719eda5a0c89067cfca88e0a",
".git/objects/14/5417af9498bcd71b7e91c7ecfae09984a96b72": "bc17360e11a8be0a4804eaf19c322632",
".git/objects/17/adbd1f5033832692cee93d5fff361cbe09261e": "fb9c1def891102f7c9b15911315c1b64",
".git/objects/1e/748562d57955af96be97713f36e2e82d7aa9b5": "a28ca52e5c1ccd4a5ce7e9fd7417d9ff",
".git/objects/1f/d33b3dae4a66270922a83a1fcba6064c663d9c": "7c8087ff6eab27fcbcc1226b2a72723c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/035fc6ced84d234bc245b2051c1db5b7162c82": "53339b680d75ef442dd4100aa75d21bb",
".git/objects/27/d1dbf5734b8e47fa33a3fbc43f8a7f50d9753d": "234300761ff5f1ff557ca111470e3158",
".git/objects/28/2619712c279217efbe59f2f11ae97d6ccb502b": "ca594889435309336b443399f7b7b0fe",
".git/objects/2c/06cb5e6d0264830c06fc3f962ddd2d5cff0f79": "be85418ecbc832be0e26d4b89b21541b",
".git/objects/34/5db8c7b042fc88ae814047507f226d8f98cc55": "4109c5783e31818067af57f7a02b5fd9",
".git/objects/37/95d73ad5b913cb0365b9af5ec862927eae9cb2": "c00c082f899754c06342ba7d5ac2e40f",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/0cf7a893aaed8c9e5d5a66175496c5338e772c": "34b6542084db3c9090772e634b1d3ee3",
".git/objects/4d/8ef18661a8b45093190b4d1b9c78be29551d7a": "38a5f41fd70b9036995ae30bc67c1d13",
".git/objects/4e/47c67d18e313c355d278b5f118d02e29c00f28": "e5e9e2073b91329ff9bb8a8f31beccaf",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/60/bf10cf8cb15dabc57bacf970e271d83679b748": "974f656c6d87f89eeab68ed2dbc0fbbe",
".git/objects/6c/d681c6ddab5eccb8d24030771f6b027bfc1c74": "a26d50313dee268ab83088fda7646faf",
".git/objects/6e/d7feb33117a38bc083b378da2e13ef122c1dde": "7d7e14d507d7439e638c7f574911063f",
".git/objects/72/611059bf544da9fc1e25da07b26101b8b9cf8e": "45103c8cb9fbeea7dd832c0e29dccdcc",
".git/objects/7a/ea122427bda73f5417213b39991ec0f0eafc00": "96a2bf1f8ef3a13a9dbe5bd94652a0fe",
".git/objects/7e/bb2f8cd479d6c96f5c00d59bdedd90957a080e": "0f1e65d37a0e95fbcf9968076ab9069a",
".git/objects/80/81f88b47870afbc450d9e9aab1c7ed3cc22eec": "e7e695deab4c4565feb9f693fc49caa1",
".git/objects/81/70e2a9989d39f99a400fe25277088f3de9edd7": "e949f93d65b56b41a20a8a33eede5bb0",
".git/objects/84/aa78a1435525da052a9d6b754674381fec0cf9": "7deee86f48789f2e337cb71fd2a05c1e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/a299825f49be1cfd70766261ee06473b529f4a": "c4e1ae08b537680cfeb19e90ef77e783",
".git/objects/9d/aa2cc23077c479fa8983b6e8954ed7bea18777": "5326c927c7bc5eea6d5aee643c52e647",
".git/objects/a9/a8af0224c37448dfd821a349999cb17dcba6ea": "44d6b857513ecc19aa4da7feaffe70af",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b09641ad4834ddf4cfa1b75e31baa702ac18f0": "f5a5793c4255160f3dd9059de9961b2d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bc/3a497d85144c6164decfd7dd06006fe10e77d2": "d3ca2269457ddda595ff6c7a03ef45a6",
".git/objects/be/66f25d4a764784a5b194e10000306c4552caac": "aad3cdc00b5c90d97f669d7d05fbc38c",
".git/objects/c4/80d8477d1423a0d1cdf61d5edbfe701a70e481": "5fdd86b0e04c95c5531b0b1edf90c69e",
".git/objects/cb/82a07f7ce3ac8bb57d1fd5e248711bff36a029": "233419ceb519e7418f18e7d619bd9215",
".git/objects/cc/8c0ae419a685b1c83e8bc3fe7e5a3b9b697f54": "cb9d45295729302f0b14d06938d9087b",
".git/objects/cf/025f99dd89ecd84cc3330a60008ba25ded3b83": "3164cc5448887e8425e786ef9dca6c87",
".git/objects/d0/a02f9642080792408a2d357983e909e16318e3": "763e4573934ec82b1d47dbeb310b6ce8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/7be7b5fa69ecd2fc87607fbfaf2d0a4f28b930": "5d478593a1bc442855580ae2ceee689c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/d4ded98c0d0f1d87042a2e41607243868e99bc": "6822b8df96bab99b48aa083c7e4256b4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4a2d458dadd0cbb157e7139b643fcae0efe51e": "291c99b0efca6a7e3c8899e104aadfe4",
".git/objects/f7/307797c206300edb467d38c1ab2dd7ccfd1038": "227bb662779beaa60798ff84b95e5994",
".git/objects/f9/97a346f22445cf20c3506c2fe1cdc9fbedb1fa": "7c61e3a679ead6a4e67daf4e6658d0b2",
".git/refs/heads/master": "d6a49319b02947e5f233e524534390cb",
".git/refs/remotes/origin/master": "d6a49319b02947e5f233e524534390cb",
"assets/AssetManifest.bin": "52b1cf123e0d326c5ea492a411ef7991",
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
"assets/NOTICES": "cd9f495ccb270f7fa7ff3b026c373a76",
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
"firebase.json": "f9c00f1ff7bb4ad873df58efced5ed5d",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d6c2d7d6879c2e82f117d640bc0b5ddb",
"/": "d6c2d7d6879c2e82f117d640bc0b5ddb",
"main.dart.js": "6dcc2e6582eb4250fc40ce02789958c7",
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
