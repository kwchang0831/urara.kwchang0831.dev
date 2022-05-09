# [<img style="float:middle" width="auto" alt="HEADER" src="https://raw.githubusercontent.com/gist/kwchang0831/f8a0fbde08b5cd6204438a90e222743e/raw/metrics.repository.intro.svg">](#)

## PageSpeed Insight

[<img style="float:middle" width="auto" alt="PAGESPEED" src="https://raw.githubusercontent.com/gist/kwchang0831/f8a0fbde08b5cd6204438a90e222743e/raw/metrics.pagespeed.svg">](#)

## Requirements

- Install Nodejs @latest

```shell
# Ubuntu
sudo apt install nodejs
```

```shell
# Windows
sudo choco install nodejs
```

```shell
# asdf
asdf install nodejs latest
asdf global nodejs latest
```

- pnpm

```shell
npm install -g pnpm
```

## Local Run

Install deps

```shell
pnpm i
```

Run dev server @ `localhost:3000`

```shell
pnpm dev
```

|> Windows users need to replace `export` in `package.json` to `set` before running `pnpm dev`.

eg.

```js
# Change the following
"dev:kit": "export NODE_OPTIONS=--max_old_space_size=7168 && svelte-kit dev --host",

# To the following
"dev:kit": "set NODE_OPTIONS=--max_old_space_size=7168 && svelte-kit dev --host",
```

## Local Build

```shell
pnpm build
```

```shell
pnpm preview
```

## Powered by

- Urara: [https://github.com/importantimport/urara](https://github.com/importantimport/urara)
- Vercel: [https://vercel.com/](https://vercel.com/)
- CloudFlare: [https://cloudflare.com/](https://cloudflare.com/)

## Useful Links

- Svelte-lightbox: [https://github.com/Hejtmus/svelte-lightbox](https://github.com/Hejtmus/svelte-lightbox)
- svelte-magnifier: [https://github.com/ambarvm/svelte-magnifier](https://github.com/ambarvm/svelte-magnifier)
- avif-cli: [https://github.com/lovell/avif-cli](https://github.com/lovell/avif-cli)
- icons: [https://icones.js.org/](https://icones.js.org/)
