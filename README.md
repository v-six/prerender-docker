Docker Prerender
===========================

Prerender is a node server that uses Headless Chrome to render HTML, screenshots, PDFs, and HAR files out of any web page. The Prerender server listens for an http request, takes the URL and loads it in Headless Chrome, waits for the page to finish loading by waiting for the network to be idle, and then returns your content (for more information see [https://github.com/prerender/prerender#readme](https://github.com/prerender/prerender#readme)).

## What's in here

- node@11
- prerender@5.5.1
- prerender-request-blacklist@1.0.2
- prerender-memory-cache@1.0.2

## Usage

The docker image allows you to run prerender out of the box, just by running :
```bash
docker run v-six/prerender -p 3030:3000
curl "http://localhost:3030/https://www.example.com"
```

## Options

All prerender options are customizable with env vars :
- `WAIT_AFTER_LAST_REQUEST` https://github.com/prerender/prerender#waitafterlastrequest
- `PAGE_DONE_CHECK_INTERVAL` https://github.com/prerender/prerender#pagedonecheckinterval
- `PAGE_LOAD_TIMEOUT` https://github.com/prerender/prerender#pageloadtimeout
- `FOLLOW_REDIRECTS` https://github.com/prerender/prerender#followredirects
- `LOG_REQUESTS` https://github.com/prerender/prerender#logrequests
- `ALLOWED_DOMAINS` https://github.com/prerender/prerender#whitelist
- `BLACKLISTED_DOMAINS` https://github.com/prerender/prerender#blacklist

Thanks to `prerender-memory-cache` and `prerender-request-blacklist` you can add :
- `CACHE_MAXSIZE` https://github.com/prerender/prerender-memory-cache#cache_maxsize
- `CACHE_TTL` https://github.com/prerender/prerender-memory-cache#cache_maxsize


For more information about usage, see [https://github.com/prerender/prerender#readme](https://github.com/prerender/prerender#readme), [https://github.com/kenylieou/prerender-request-blacklist#readme](https://github.com/kenylieou/prerender-request-blacklist#readme) and [https://github.com/prerender/prerender-memory-cache#readme](https://github.com/prerender/prerender-memory-cache#readme)