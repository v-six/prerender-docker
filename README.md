Docker Prerender
===========================

Prerender is a node server that uses Headless Chrome to render HTML, screenshots, PDFs, and HAR files out of any web page. The Prerender server listens for an http request, takes the URL and loads it in Headless Chrome, waits for the page to finish loading by waiting for the network to be idle, and then returns your content (for more information see the [official documentation](https://github.com/prerender/prerender#readme)).

## What's in here

- [node@11](https://github.com/nodejs/docker-node#readme)
- [prerender@5.5.1](https://github.com/prerender/prerender#readme)
- [prerender-memory-cache@1.0.2](https://github.com/prerender/prerender-memory-cache#readme)

## Usage

This lightweight docker image allows you to run prerender out of the box just by running :
```bash
docker run vsix/prerender -p 3030:3000
```
```bash
curl "http://localhost:3030/https://www.example.com"
```

## Options

All `prerender` options are customizable with env vars :
- [`WAIT_AFTER_LAST_REQUEST`](https://github.com/prerender/prerender#waitafterlastrequest)
- [`PAGE_DONE_CHECK_INTERVAL`](https://github.com/prerender/prerender#pagedonecheckinterval)
- [`PAGE_LOAD_TIMEOUT`](https://github.com/prerender/prerender#pageloadtimeout)
- [`FOLLOW_REDIRECTS`](https://github.com/prerender/prerender#followredirects)
- [`LOG_REQUESTS`](https://github.com/prerender/prerender#logrequests)
- [`ALLOWED_DOMAINS`](https://github.com/prerender/prerender#whitelist)
- [`BLACKLISTED_DOMAINS`](https://github.com/prerender/prerender#blacklist)

Thanks to `prerender-memory-cache` you can add :
- [`CACHE_MAXSIZE`](https://github.com/prerender/prerender-memory-cache#cache_maxsize)
- [`CACHE_TTL`](https://github.com/prerender/prerender-memory-cache#cache_ttl)

In the example below `prerender` will authorize only domains `www.example.com`, `www.google.com` and cache all responses in memory during `6000` seconds :
```bash
docker run vsix/prerender -p 3030:3000 -e ALLOWED_DOMAINS=www.example.com,www.google.com -e CACHE_TTL=6000
```

## More

For more information about other options and usage see :
- [prerender README](https://github.com/prerender/prerender#readme) 
- [prerender-memory-cache README](https://github.com/prerender/prerender-memory-cache#readme)