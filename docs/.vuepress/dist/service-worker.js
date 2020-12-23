/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "320e887d5e97cff24d06b74773d472ce"
  },
  {
    "url": "accumulate/index.html",
    "revision": "910bbcb915ee095175b8a6e7b3af52e6"
  },
  {
    "url": "algorithm/index.html",
    "revision": "663aae84e1eeb7a6db898f1aa388cede"
  },
  {
    "url": "assets/css/0.styles.8eb0d87d.css",
    "revision": "4128d7f240c09e8131493c3b9d34a224"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.dad9bf50.js",
    "revision": "79d535a9dd7f81156e73c93b63860feb"
  },
  {
    "url": "assets/js/4.ab31d681.js",
    "revision": "18cf410483c45bf839135a74c9939f2a"
  },
  {
    "url": "assets/js/5.d8c3a1d1.js",
    "revision": "efe375d49d25758c06e874d052537511"
  },
  {
    "url": "assets/js/6.c5b6f8b7.js",
    "revision": "fe5cf48ebe85c16203dd84f592c99b7f"
  },
  {
    "url": "assets/js/7.0cd37940.js",
    "revision": "4f06051541855034cac021eae5300e90"
  },
  {
    "url": "assets/js/8.12f716cf.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.2d54fc5c.js",
    "revision": "9b58bc7c39e457b1f49641a1ce7d2d81"
  },
  {
    "url": "guide.html",
    "revision": "441e5033b1ff6aef17ae6a2af20c6b15"
  },
  {
    "url": "index.html",
    "revision": "f42d1f8ac02c3900e6ae96365976615f"
  },
  {
    "url": "others/index.html",
    "revision": "970bca1013b242b54ffb3b143f8ea4c2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
