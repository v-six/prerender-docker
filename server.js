#!/usr/bin/env node
var prerender = require('prerender');
var server = prerender({
  chromeFlags: [ '--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars', '--disable-dev-shm-usage' ],
  chromeLocation: '/usr/bin/chromium-browser'
});

server.use(require('prerender-memory-cache'));
server.use(prerender.sendPrerenderHeader());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

if (typeof process.env.ALLOWED_DOMAINS === "string") {
  console.log("Whitelist domains : " + process.env.ALLOWED_DOMAINS);
  server.use(prerender.whitelist());
} else {
  console.log("Blacklist domains : " + (process.env.BLACKLISTED_DOMAINS !== undefined ? process.env.BLACKLISTED_DOMAINS : "none"));
  server.use(prerender.blacklist());
}

server.start();