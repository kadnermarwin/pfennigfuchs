self.addEventListener("install",()=>{self.skipWaiting()});self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim())});self.addEventListener("fetch",()=>{});
//# sourceMappingURL=serviceworker.js.map
