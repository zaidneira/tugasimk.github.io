'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8f796a8c9a4855a0bc3ff5c00315d80b",
"version.json": "82d5f751a19fecc66f8deaf5a2fb21bb",
"index.html": "d946bdd1200a42ccfa99a62caffc6491",
"/": "d946bdd1200a42ccfa99a62caffc6491",
"main.dart.js": "84cb808dc324d071f59d0a9a66470ada",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2d738ad7ebfd292d1afa0d07650c2f31",
"assets/images/imk/Renata.JPG": "6ab849b4de5faccc3fb50b843cffbb14",
"assets/images/imk/Azka.JPG": "90aa5aa6f6c1de349aa5893bc8805aa0",
"assets/images/imk/Attitude.png": "c27b85cc5302903f7d4f0d1970df3c5e",
"assets/images/imk/Dhuaza.JPG": "4fc883e5c9381beeadee7524e7f6cf00",
"assets/images/imk/Riefa.jpg": "c98ce9261441915431dd19803b0b8ef3",
"assets/images/imk/Imam.png": "6102385919787ba64f12142be6642d8d",
"assets/images/imk/Raihany.jpg": "3a51081b1aff8988d8dcf75016123bcf",
"assets/images/imk/Wisnu%2520Adi%2520Firmansyah%2520-%2520NyunNyun%2520Gaming.png": "4ebc48d0fe6b96090ecac56c740d45c8",
"assets/images/imk/Ringgi.jpg": "bfbdc3ef9548dd1ef1cf52b5222238af",
"assets/images/imk/Attitude1.png": "453a8578ac598346d605045a6250e751",
"assets/images/imk/Patience1.png": "cedd06692f45be309c2e9affb66202b0",
"assets/images/imk/System%2520Experience.png": "a32ab7bdb30e55d8afde72f3b6fd695c",
"assets/images/imk/Motivation.png": "a55f039a719f004e01df4efddf8f85df",
"assets/images/imk/Frequency%2520of%2520Use.png": "06cf64a7d9eb34b70805c83a17679c3f",
"assets/images/imk/Cognitive%2520Style.png": "4cca3f39b6e08dd6fad095b61ba44298",
"assets/images/imk/Task%2520Experience.png": "8d03df8a4ce053323af6dc8783ca19a5",
"assets/images/imk/Task%2520Importance.png": "03bb506c5fdad6ced6137229b57f7a73",
"assets/images/imk/Dude.jpg": "4f9f307063d2834bdaa912208ca69393",
"assets/images/imk/Queensha.jpg": "7a6adf7954ffaba2092e1f1c2af7326e",
"assets/images/imk/Nadira.jpg": "48fe91fc6951bb5f90b38c8bb72106ee",
"assets/images/imk/System%2520Use.png": "9d9515277c34f25c34dd2f2088e22aa2",
"assets/images/imk/Shafa.jpg": "dc40969cd66adbdc9b0f3ac244bedf25",
"assets/images/imk/Expectations.png": "3da12c145a9dcf9b647ef387cae81d2b",
"assets/images/imk/Cognitive1.png": "0b70c4234f9153566dcef15d58457273",
"assets/images/imk/Patience.png": "9d54087084aa57dce71f07ac86a8912b",
"assets/images/imk/Fadillah.jpg": "e04ef53cf94840665afc5dc19425812c",
"assets/images/imk/Motivation1.png": "8e1f13320d00b72fce834d599746e718",
"assets/images/imk/safa%2520-%2520safa%2520siti%2520maryam.jpg": "d1f0e752daced2dfdd1afadf79358e98",
"assets/images/imk/Stress%2520Level.png": "224b605527deb284ca05f9e833cee124",
"assets/AssetManifest.json": "9f7652616e3a829956e00ed2e618c522",
"assets/NOTICES": "10aa1d27a0731b0475d3ecc17b8c76d4",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "59974fd168f875bf2594b41c8ed103f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6dbbd2e3bc9d57b3d6239f59f7ce221f",
"assets/fonts/MaterialIcons-Regular.otf": "49fc69e54747dd198aa525c96c58cb75",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
