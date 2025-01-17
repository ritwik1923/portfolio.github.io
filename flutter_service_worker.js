'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1e83a67af9c592e05a663577d37f881c",
".git/config": "2d4291f3416ddf2c2eb4b06d5235018d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd20b081a84adc61590cff99a7afc93d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "6fbfa30f38bf47ca1bfd85fd4ec797e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a1081e772f3335742ddfa0ea1c2444c",
".git/logs/refs/heads/main": "4e2e447afd3f19056127e0515345a2f2",
".git/logs/refs/remotes/origin/image-library": "35deb36ac81dea5eb1d0ac57c8576b86",
".git/logs/refs/remotes/origin/main": "8127721e9dfa3214c34b930a22ad7a14",
".git/objects/02/ecfe832dba60ef0504a29f97122065ef039c89": "ed594f24ed2d5d68cf5882d0896ffefd",
".git/objects/03/3fa9182d0b4c8736afb319b476c3458622bbeb": "54732ec6956e40f98bd3d101ac7e860f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/51771ee4e2b325c75728f462da0fe812e053ad": "9f9f2a0f6edfad6bd1bb5412bf62a690",
".git/objects/08/f89eca0ed80812f5be8d448706c4e00e7780bd": "f1f60da9c54567efad8a430b6514e5f3",
".git/objects/0b/67a148aa7665a8b1bb1c2b51ea44ea76d69c17": "db44b3c255d62ac673995c4e6c81eee3",
".git/objects/0d/08b4c9d930511215908660231984deac79535c": "624d9aca3a9b70eca87fb1d0d23cacd4",
".git/objects/0d/a7877b8dafd51d3f072a60c116fe4a0f970c48": "3dfbdb4036036fcf7b93784cb59ac1a5",
".git/objects/0f/3590c9479a594057a4ba66aecf42ec438a8b58": "26505fd71b51d08b698c119a297be4a8",
".git/objects/14/c6cd2c6232c1291c8eef5b0279662902085d29": "624cea1647674e397e6e63216f1ec36e",
".git/objects/14/f2fa5d300aa9f8a636d87d6ae3f3a0bc9f1c7f": "56db27f838ee937f4494208519bb49cc",
".git/objects/1a/73ead49db084ea786f4f345c926e9349f079c2": "39d6d06fe5bc1b8d6597785561356d37",
".git/objects/1d/c2184786a1932e7a76283e99b78a086c318ecb": "22f3e2468815f1b25bf7f16092e1f5ef",
".git/objects/1d/efe42727305af218d4e60258e2f9865620dc20": "057bba53855685f14e3a99b38fc5a96f",
".git/objects/23/f7ab5f756f7eaa2c4203bc4586e45914d025e9": "7d34a0f7ceb1dc51cdaf3a867245b0b9",
".git/objects/27/e3a3bca3e96932ed8d011986835b9ea08becc0": "271d40ff5c6bc32f2b6c2a6c17d4d823",
".git/objects/29/3ae3099055e27ec55cffcf02466d5ab01de9e1": "d294fcb35e210f4faad21ec5ff11dff1",
".git/objects/2e/bd5dcf4ad87e31281a49481520150fb7f97821": "a4c2fa708435e1353f6562d9dd60a500",
".git/objects/32/2c30f3ad47525b81175f5a3749351a6fe5fe5f": "9a1223ed10baa686c7a32fc8028d0a9f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/56500f4e79646414f6a552f5a80b8fe43cec89": "24e02fdc4394201ff6117719a64ecc77",
".git/objects/33/8f339a7c4e02c870b9be517bdad79d2a9809ba": "1f0831251840508436c3c5166a741538",
".git/objects/35/2e19a043248c6bb98e443b431d9a9a8cbdb705": "f4498799ee5b2d9d1e3ee732bb8c7ba9",
".git/objects/35/f3d0fa9715f5137458e9643cb30e97d4307182": "20af5e4e5bd1a8bd199eb3739299b2be",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3a/a19925986d67e5ea0f09705dadc84d350058c1": "83ed4f88deafbdf7f764c28eb266e1c1",
".git/objects/3e/dc79d2b239f32924e27e9cfff96b3205b64974": "33e6488d05b0bac52390b63a4de673be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/a8a95b822a94e8f174dded33dcf6f680790053": "43160b764446dcb4259a03d68d98079f",
".git/objects/4b/5535d22549e11065f7d52dc5eb74157615922b": "49bfc1b6304988e6a203f6ed12a45022",
".git/objects/4d/a84d9f8e9bd6413b09591097fd80e9b09253d2": "bdb9617e12ec5edd08413c79cc01aeb7",
".git/objects/4f/015c77875577aaabc95d1545719babc86278bb": "2f4495d05380f0449c29fde9bd651985",
".git/objects/51/02c28130c00c942f0209f2c50df439b0d9caae": "c8f2a9dc31ba6ab6b908a8def64e5f21",
".git/objects/56/40e1e29f8c60a5aa5150481751a06fa11d4427": "03858147c9977748f88085cd95ffbfd8",
".git/objects/57/51b5dd3ee3a3d71837c5b9ff9b6d23ee9b51a3": "a4a0a64580ee0d46684db0f0d98d6d51",
".git/objects/58/1257ff890de24aedf2247a1aa45c3c51fdd56e": "8fa41b54be0f2b8ade309d74a87fed5c",
".git/objects/58/b66ae35b0552b3de26d9343020988122adbec0": "aa3bca0fef25e4061f2d61948b78f2f2",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/1a059f6f83448d87f229fa03bb5447ebeca4af": "e67793f8c79c44dc212187c73b0480a5",
".git/objects/63/75a8f4a6550e3a1dcba89494d3bf23f0d35f9b": "b739c9866f3e9206bb560d2310ecb614",
".git/objects/66/bc05079dde3bc286b09117b3c04a2db6c3fd77": "2226214854e18c6bd0cb49848131295b",
".git/objects/67/3312322e243db90be82d08720a223fb2c91cac": "1c52c7ffa6894d214d654590fcecbb5c",
".git/objects/69/2114d6517066a3768b571f420b04e59b35c6b1": "cd5d58d6ed79043205fcd17796f6c69c",
".git/objects/70/f9478af50386be9798fed6cf30da55e2b12486": "dcc999b702840a7afcbb1b3a7b1db1ac",
".git/objects/77/1b4dc6eb1420b78ac8396f271f8ebfab34c2f9": "465a5af876387b3b06c2132f1c3fe695",
".git/objects/77/b579facf0d7927a9d657854d99de6a4122fb4e": "12f321b3f7418892155097a15825f50f",
".git/objects/78/4ace4aea29cca344e4e37afe77eb12c10b6c29": "65577190588646c26c34e39d1843d852",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/f71f8639264b8811ef5846c16f63e093828264": "5ba6b9fbe10d1229628031bbd6f7202c",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/83/9f3e10296955460a47117506dcf1921859d9db": "54310ae1ca2957a7a6a0fbee16d83f26",
".git/objects/84/3bffc6c21f1d3bdb9d76778933063f5cf40a28": "20d9107b7f8a2585f3faadc0536d6c19",
".git/objects/87/c9b05c22da37c3ea430247d0c1979d3e3f40fe": "8e2e46d806cb0bc2d1558f72ad13c18c",
".git/objects/88/75bc433038226b0305262365d1be2688ce4165": "da5db35bf15467d4286a0b57cf74ce3e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/8a/6374de42feec632be32f1d3599f43239b1a2a0": "e15ae3e5362b3175c8e6b843eef6db9b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/eaa960ff5ee807d29d2a96513119a02ee20493": "762af39f09c6151a7a81b08035a18f28",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/b9ba3ae19574217ffcf791e2988d07c61d905d": "7131807012a72bea7d6f65ed92da3d95",
".git/objects/94/c927abd215fbc7edd118d52db44afc08814c8b": "d0d664074e7d1942917b3a8e17f1803c",
".git/objects/99/25dc7e44af43895b7ff7fb3a7a0557af65a06b": "57040142beda4bef85f265a516f189e1",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9c/fe77d6a5c58d99219941c193fd50b884d5d3f7": "14287523408981f9fa87da4191a20f9f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/1ada0a981142db4f08e1d414d1493df05e3157": "88e5dd97236747746a7dc580541104d3",
".git/objects/aa/7788571db1722d88512da11851c8d0d3ab5e80": "890865cf56e67e074dd313f078603ee5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/22f0906310ca03c60cf569a161291675bb8f75": "7629566a4d9dc9a58b91fb15bdf3f126",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/af/19598065032fd8a933412e4c21dc9bd1df1be4": "aaa7ef177d4ca00a883cf2dd0cea686b",
".git/objects/b4/4788bad68bf53d65cfdfbafeea00cac5cdc0dc": "024e3ed8d8d821769e26e89bfcc934bd",
".git/objects/b4/cbe773a66aaaa197f8f2a4a5869005be1380cd": "20bc77d5c45e0329daab2e14d07bdcb9",
".git/objects/b5/77714d3aa170f238873138c408aa748490dbd1": "0ca57fa2d2ff4a453c53f12dddd33c2d",
".git/objects/b6/27ab1fe651b8f3f1694906331d351715da21b8": "8bf57b61c76a3606a15639b91e3ada8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/e14993d564e4456be62d8368e059f517747fe7": "2871bf80d498d425b9f19dfe686a09b6",
".git/objects/bf/c66b7ec90b509d04e84917c8c64284ad586713": "f94054a0575bd1d01b4019574d34f144",
".git/objects/c1/5c5062d7cab2b2248dd2f71673e2bbf49586d9": "3370df6145a2f1812a334bf89f82b33c",
".git/objects/c1/de75e8f53557e8e4f5e3ea977535185e381faf": "a9b65c4d56cf6728c089f6acf00e54d2",
".git/objects/c2/a9152c486a9d623e40079f64bbc0fd4bfabb93": "88046011112c161a967a69611fb642a5",
".git/objects/c2/ba6632c5df38655602b9c85d2e43af6369d9f6": "c13513b566c3dc7240e7694759914ef2",
".git/objects/c7/90f79b422db1cd86629575be0d62d4d45dc355": "3f862b807196ae567b8f08a8dce5b02d",
".git/objects/c8/36cf988316d716762cad146c9c1fa67c45ffd3": "2d32395175fa7110277cf701ffc409df",
".git/objects/c8/636cdb47362bb73c99e289eaf2f511ca545935": "69774d36969ac0529d78c02d2e102e9a",
".git/objects/cd/30316ce028f9717586158680bea4eb21f022d1": "059d7a2ad0bd3edfc8fb86194712f9a6",
".git/objects/cd/38147e23379d245b70b66f1014d818a99ca4c1": "7aab973db83a47b97e283c35029040a6",
".git/objects/d0/212f073a8c60508477708c4dfcf16ee444c824": "bc8f926e9ff06df481945c4b4313ec7b",
".git/objects/d2/3f231dd3ad1e98902a7cd8b428dd2636aad858": "c1b3c105fd9edb78398ed8c628a125e3",
".git/objects/d4/227e0011e6634163885aa53177eae7e183c0b1": "faee92d595ed8d893825b94391be68eb",
".git/objects/d6/564cda6669284add3687bf075486b2c6413700": "83d7f5752333b7884fcee866261b1972",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/d9/a3517f4c3f2e108e454bcd3b2b4167aa3dc056": "69dfd0b81784919cc11f016041125c8e",
".git/objects/db/61cf5dd00818c7c7600afeddfdd91122f7b00c": "23d8a8f2227091de4334c4fdfff3ef5b",
".git/objects/db/8df7e96f6838cc9fceb3984472b9b9658169f0": "135a31e409e803475ad8021223849c80",
".git/objects/e1/85d984bf4025d0f83b4985b5e2278b160fefc1": "bfea8d0c8630b453242d316368a1e83a",
".git/objects/e3/937029641fe7f90372388f4c93700fdec0c50a": "0760cbf772695b8a5c8fd9bffef7a704",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/037f573594de4519311dc630e201756761bf84": "915a31a107f453e52b8d77654390216e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/a57da6ce3c01da242c85de67649830bc446eb0": "5426f424cafc22b12fbc6bdf70e0ac1b",
".git/objects/f6/4e6d8722d47889da72154cac86dd7afa3f08a9": "17dcbaaef2f6b5e576e47aad3f96077d",
".git/objects/f8/180da9e3dce80e5e53dbab578dab6154c70007": "6fcb020dd58ded8c961f4e8680e179f3",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "11de612ad4585292a75d7f72354c4724",
".git/refs/heads/main": "541b7777a24225752e9db9569243d7c7",
".git/refs/remotes/origin/image-library": "3cb9d2abd2ada61aac8d52e8581ae45b",
".git/refs/remotes/origin/main": "541b7777a24225752e9db9569243d7c7",
"assets/AssetManifest.json": "25ddce8cd696e794ea13cef619c664a0",
"assets/assets/fonts/BakbakOne-Regular.ttf": "ab68e44443ab6749fbd45c3830a6a1da",
"assets/assets/fonts/SourceCodePro-VariableFont_wght.ttf": "270ac867bd41054c658e8622d6259580",
"assets/assets/images/mbg.jpg": "923a122e8b91e53f7e6e498d7bc4dfe3",
"assets/assets/images/me.jpg": "31a59983fdc06abccc0893f2cb4e7fe5",
"assets/FontManifest.json": "49fd87e27d374a0504deeb9d58113024",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "83d98cf5eeb5edb6495731d5fbaa4c60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "0442a9cb6292888bcba4498962360ed9",
"git.sh": "9e00453c7d956a65890833263de85279",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d910980a4ecf22bd369ebd070f56aaf9",
"/": "d910980a4ecf22bd369ebd070f56aaf9",
"main.dart.js": "64c2406fb9acd29c56a19e203b3f9578",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
