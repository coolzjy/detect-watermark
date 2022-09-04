# Detect Watermark

Detect watermark on web page to avoid track

## install deps

```bash
pnpm i
```

## dev

```bash
pnpm start
```

start a http server to host bundle.js

```bash
npx http-server -c-1 .
```

insert below line in tampermonkey script:

```js
// @require http://localhost:8080/bundle.js
```
