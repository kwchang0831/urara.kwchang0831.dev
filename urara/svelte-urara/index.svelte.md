---
title: Urara - 用 Svelte 打造的靜態網站生成器；來架個跑超快的網誌
descr: 用 Svelte 打造的靜態網站生成器 - Urara。 打造速度超快的網站，功能十足且簡潔美觀。 本篇文章主要紀錄 Urara 的架設流程。
summary: 使用 Urara 生成並架設網誌於免費平台 Vercel 與 Netlify
created: 2022-05-03
published: 2022-05-03
updated: 2022-05-03
cover: /svelte-urara/cover.avif
tags:
  - 中文
  - Svelte
  - Markdown
  - Vercel
  - Netlify
---

<script lang="ts">
  import Lightbox from '$lib/components/extra/lightbox.svelte'
  import Alertbox from '$lib/components/extra/alertbox.svelte'
</script>

## 開頭

本網站是用 Urara 建置而成，PageSpeed 的評分如下：  
![fig01.svg](/svelte-urara/fig01.svg)
<Alertbox text="Performance 通常會在 90~100之間浮動。" type="info"/>

[Urara](https://github.com/importantimport/urara) 是使用以下技術打造而成：

- [TypeScript](https://www.typescriptlang.org/)
- [Svelte](https://svelte.dev/) 前端編譯器
- [SvelteKit](https://kit.svelte.dev/) 框架

而文章是用 [MarkDown](https://markdown.tw/) 語法來進行寫作。

網站頁面架設是透過資料夾檔案的架構方式來新增。這種方式很直覺，假設我們的資料夾結構為以下：

```shell
urara
+-- about
    +-- index.svelte.md
+-- blog
    +-- index.svelte.md
    +-- 20220503
        +-- index.svelte.md
```

那我們生成出來的網站路徑就會有以下：

- /about
- /blog
- /blog/20220503

本篇文章主要紀錄建置 Urara 於 Vercel 與 Netlify 平台的流程。

更多 Urara 的細節介紹，請參考 Urara 的 [Git Repo](https://github.com/importantimport/urara)。

## 平台帳號需求

請註冊或準備好 [Github](https://github.com/) 帳號，然後選擇要使用 [Vercel](https://vercel.com/) 或 [Netlify](https://www.netlify.com/) 來建置網站。

[Vercel](https://vercel.com/) 與 [Netlify](https://www.netlify.com/) 的帳號可以用 Github 帳號來註冊。

## 環境配置

本文章會使用以下環境來操作：

- Ubuntu 22.04 LTS
- Nodejs v18.0.0
- pnpm 7.0.0

你可以使用 MacOS 或 Windows，流程一樣。

## 安裝 NodeJS

檢查 Nodejs 版本。

```shell
node -v
# v18.0.0
```

### 選擇 1. 直接安裝 NodeJS

```shell
sudo apt install node -y
```

### 選擇 2. 使用 [asdf](https://asdf-vm.com/) 安裝 NodeJS

新增 NodeJS。

```shell
asdf plugin add nodejs
```

設定預設 NodeJS 要安裝的全域包。

```shell
vi ~/.default-npm-packages
```

```shell title="~/.default-npm-packages"
npm-check-updates
pnpm
degit
prettier
```

安裝 最新版 NodeJS。

```shell
asdf install nodejs latest
```

設定全域 NodeJS 版本。

```shell
asdf global nodejs latest
```

### 選擇 3. Windows 下載安裝檔

官網下載安裝檔案： [https://nodejs.org/en/](https://nodejs.org/en/)

### 選擇 4. Windows 使用 Choco 安裝

```shell
sudo choco install nodejs
```

## 安裝 [degit](https://github.com/Rich-Harris/degit)

degit 可以幫我們從 Git原始碼庫 建置專案鷹架。

```shell
npm install -g degit
```

## 安裝 [pnpm](https://pnpm.io/)

pnpm 是比 npm 更快更節省空間的套件管理器。

```shell
npm install -g pnpm
```

## 下載並建立 Urara 專案

在你想要建立專案的資料夾內，執行以下：

```shell
# 請自行改名 name
npx degit importantimport/urara name
```

進入專案資料夾。

```shell
# 請自行改名 name
cd name
```

下載專案所需的套件。

```shell
pnpm i
```

## 啟動本地開發伺服

在專案資料夾內，開啟本地開發模式。

```shell
pnpm dev
```

打開瀏覽器輸入 `http://localhost:3000/` 就可以看到了。

<Lightbox src="/svelte-urara/fig01.avif" alt="fig01"/>

若是你是用 remote 的方式，請修改 `package.json` 的 `dev:kit` 指令：增加 ``--host`` 參數，讓內網的其他電腦可以透過 `https://{IP}:3000/` 的方式看到網頁。

```js title="./package.json"
...
    "dev:kit": "export NODE_OPTIONS=--max_old_space_size=8192 && svelte-kit dev --host",
...
```

## 修改網站參數

進入 Config 資料夾的位置。

```shell
cd ./src/lib/config
```

最主要需要修改的是以下：

`./src/lib/config/site.ts`

- title: 網站標題
- subtitle: 網站副標題
- descr: 網站介紹
- author: 作者

`./src/lib/config/general.ts`

以下是 Navbar 上方連結按鈕的修改。

```ts
export const header: HeaderConfig = {
  nav: [
    {
      text: 'Get Started',
      link: '/hello-world'
    },
    {
      text: 'Elements',
      link: '/hello-world/elements'
    }
  ]
}
```

### 修改網站圖片

`./svelte-uraraassets`

依照喜好需求，自行替換圖片檔案。

若要改檔名或新增圖檔，請確認修改 `./src/lib/config/icon.ts`。

## 新增網頁

`./urara/`

按造 hello-world 資料夾的結構：

```shell
urara
+-- hello-world
    +-- index.svelte.md
    +-- elements
        +-- index.svelte.md
    +-- toc-disabled
        +-- index.svelte.md
```

我們會有以下三個網頁路徑：

- http://localhost:3000/hello-world
- http://localhost:3000/hello-world/elements
- http://localhost:3000/hello-world/toc-disabled

若是你想新增一個 about 頁面。

- http://localhost:3000/about

那我們就會新增一個 about 的資料夾 與 `index.svelte.md`：

```shell
urara
+-- about
    +-- index.svelte.md
```

### 頁面寫作格式

每個 `index.svelte.md` 文件開頭都需要填寫 屬性 (metadata) 來標示這個文件的內容。有些屬性不一定要加入可以省略。請自行嘗試或參考 `./urara/hello-world/index.svelte.md`。

內文是使用 [MarkDown](https://markdown.tw/) 語法來撰寫，快速上手請參考 [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)。

以下為頁面範例：

```md title="./urara/about/index.svelte.md"
---
title: 文章標題
descr: 文章描述
created: 新增日期
published: 發布日期
updated: 更新日期
cover: 封面圖片 (從urara資料夾開始算路徑)
tags:
  - 第一個標籤
  - 第二個標籤
---
  
## 第一段文章標題
第一段 內容
  
### 第一段第一節
第一段第一節 內容
```

更多屬性參數細節，可以自行參考 `./src/global.d.ts`。

### 嵌入圖片

假設我們要幫 `about` 頁面新增 cover 與 其他嵌入圖片，我們可以把圖片放置於同一個資料夾，如以下：

```shell
urara
+-- about
    +-- index.svelte.md
    +-- cover.png
    +-- img1.png
```

在我們文章屬性的部分，路徑會這樣寫：

```md title="./urara/index.svelte.md"
cover: /about/cover.png
```

然後在文章內容中要嵌入的話，會這樣寫：

```md title="./urara/index.svelte.md"
![img1](/about/img1.png)
```

## 上傳到 Github

在 Github 新增一個 Repo，不確定如何新增的請參考[Github文件](https://docs.github.com/cn/get-started/quickstart/create-a-repo)。

在專案資料夾內輸入以下，上傳專案到 Github。

```shell
git init
git add .
git commit -m "first commit"
git branch -M main
# 請換上自己開新的Repo之後的 .git 位置
git remote add origin git@github.com:your/repo.git
git push -u origin main
```

接下來就可以看到你的 Repo 包含了所有的原始碼。我們下一步會用這個 Repo 來架設到 Vercel 或 Netlify。

## Vercel 建置

1. 登入 [Vercel](https://vercel.com/dashboard) 後，點選新增專案 `+ New Project`。
2. 選擇 `Import Git Repository` 從 Git Repo 匯入專案。![fig02](/svelte-urara/fig02.avif)
3. 點選 `Deploy`。 ![fig03](/svelte-urara/fig03.avif)
4. 建構完成之後，點選回到 Dashboard 就可以看到建置的網址。![fig04](/svelte-urara/fig04.avif)

## Netlify 建置

1. 登入 Netlify 後，選擇 `Import from Git` 從 Git Repo 匯入專案。 ![fig05](/svelte-urara/fig05.avif)
2. 選擇從 Github 匯入。
3. 不用更改任何設定，點選 `Deploy site`。 ![fig06](/svelte-urara/fig06.avif)
4. 點選 `Open published deploy` 可以看到成果。 ![fig07](/svelte-urara/fig07.avif)

## 測試網站

這邊提供一些測試網站，挑自己喜歡的，輸入建置好的網址來測試看看網站的速度。

- https://www.webpagetest.org/
- https://web.dev/measure/
- https://pagespeed.web.dev/
- https://www.cloudflare.com/zh-tw/lp/can-your-website-be-faster/

## 最後

辛苦了，希望你已經順利地架設好網誌，開始隨意摸索 Urara 了。  
若文章哪裏有問題，還望不吝指教。

## 完結
