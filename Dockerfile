FROM node:11-alpine
LABEL maintainer="Kévin Bargoin <kevin.bargoin@gmail.com>"

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

RUN apk add --update-cache chromium \
 && rm -rf /var/cache/apk/* /tmp/*

COPY server.js /app/server.js
COPY package.json /app/package.json
WORKDIR /app

RUN npm install --no-package-lock

EXPOSE 3000

CMD ["node", "server.js"]