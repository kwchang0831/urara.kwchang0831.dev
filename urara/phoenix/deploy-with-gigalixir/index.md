---
title: '教學 免費部署 Elixir / Phoenix APP 在 Gigalixir 上'
description: 快速且免費地在Gigalixr部署Elixir/Phoenix App，且包含免費Postgres的部署，只需要幾個指令，就可以讓你的APP上線了。
summary: Gigalixir 讓你只需要幾個指令，就可以快速且免費地讓你的APP上線
published: 2022-06-11
cover: /phoenix/deploy-with-gigalixir/cover.webp
tags:
  - 中文
  - Elixir
  - Phoenix
  - Gigalixir
  - 2022
---

<script lang="ts">
  import Codecopy from '$lib/components/extra/codecopy.svelte'
  import Img from '$lib/components/extra/zoom.svelte'
  import Info from '$lib/components/extra/infobox.svelte'
  import Github from '$lib/components/extra/github.svelte'
</script>

## 開頭

說實話，對於 Elxiir / Phoenix APP 的 Deployment 部署來說，說簡單其實也不簡單。好在現在市面上越來越多工具與平台幫我們簡化了流程，讓我們能更快速地部屬自己的 APP。

根據[Phoenix 官方手冊](https://hexdocs.pm/phoenix/deployment.html)，讓我們能快速部署的最主要兩個一條龍平台就是 [Gigalixir](https://www.gigalixir.com/) 與 [Fly.io](https://fly.io/)，一條龍就是所有東西都包辦了，當然也包含了 Postgres 的部署。我們只需要幾個指令就可以讓我們的 APP 上線了。

官方有提到 Heroku 但並不建議。因為 Heroku 會限制同時連線的數量與每個連線的持續時間，這對於 Elixir / Phoniex 的特性來說可是大大折扣。畢竟 Elixir 就是靠超多 light-weight process 來提升擴展性的。

廢話不多說，本篇文章主要會介紹如何部署在 Gigalixir 上的流程，我們直接開始。

## 準備與環境

這邊我會用我們之前寫的一個 Demo 來作範例

<Github user="kwchang0831" repo="phoenix-dartSass-tailwind-daisyUI"/>

我是在 Windows 上使用 VSCode Remote Ubuntu Server 進行開發的，所以以下的教學會以 Ubuntu 為主。

<Img src="deploy-with-gigalixir/fig01.avif"></Img>

## 安裝 Gigalixir CLI

使用 pip3 安裝

<Codecopy>

```shell
pip3 install gigalixir --user
```

</Codecopy>

新增 Gigalixir CLI 安裝路徑 `~/.local/bin` 到 Path (適用 Fish Shell)

<Codecopy>

```shell
echo 'fish_add_path ~/.local/bin' >> ~/.config/fish/config.fish
source ~/.config/fish/config.fish
```

</Codecopy>

>! 若還沒有嘗試過 Fish Shell，可以參考 [Ubuntu 安裝 Fish + Oh My Fish + Tide 與各種插件](/dev-env/ubuntu/fish/)。

驗證安裝

<Codecopy>

```shell
gigalixir --help
```

</Codecopy>

## 註冊 Gigalixir

<Codecopy>

```shell
gigalixir signup
```

</Codecopy>

接受條款之後，輸入 Email 等等資訊...

<Codecopy>

```shell
❯ gigalixir signup
GIGALIXIR Terms of Service: https://www.gigalixir.com/terms
GIGALIXIR Privacy Policy: https://www.gigalixir.com/privacy
Do you accept the Terms of Service and Privacy Policy? [y/N]: y
Email:
```

</Codecopy>

註冊完畢之後，登入帳號

<Codecopy>

```shell
gigalixir login
```

</Codecopy>

輸入之前註冊的資訊

<Codecopy>

```shell
gigalixir login
Email: ****
Password: ****
Would you like us to save your api key to your ~/.netrc file? [Y/n]:
Logged in as ****
```

</Codecopy>

驗證登入

<Codecopy>

```shell
gigalixir account
```

</Codecopy>

## 下載 Demo Project

<Codecopy>

```shell
git clone git@github.com:kwchang0831/phoenix-dartSass-tailwind-daisyUI.git
```

</Codecopy>

進入資料夾

<Codecopy>

```shell
cd phoenix-dartSass-tailwind-daisyUI
```

</Codecopy>

## 部署至 Gigalixir

在 Gigalixr 建立一個 APP (名字可以自行更改)

<Codecopy>

```shell
gigalixir create -n "pdtd"
```

</Codecopy>

驗證 APP 創建

<Codecopy>

```shell
gigalixir apps
```

</Codecopy>

驗證 Git Remote

<Codecopy>

```shell
git remote -v
```

</Codecopy>

<Codecopy>

```shell
❯ git remote -v
gigalixir       https://git.gigalixir.com/******** (fetch)
gigalixir       https://git.gigalixir.com/******** (push)
origin  git@github.com:kwchang0831/phoenix-dartSass-tailwind-daisyUI.git (fetch)
origin  git@github.com:kwchang0831/phoenix-dartSass-tailwind-daisyUI.git (push)
```

</Codecopy>

設定 Gigalixr 執行環境，建立設定檔

<Codecopy>

```shell
echo 'elixir_version=1.13.4' > elixir_buildpack.config
echo 'erlang_version=25.0' >> elixir_buildpack.config
echo 'node_version=18.3.0' > phoenix_static_buildpack.config
```

</Codecopy>

在 `assets/package.json` 新增設定啟動 Script

<Codecopy>

```shell title="package.json"
{
  "scripts": {
    "deploy": "cd .. && mix assets.deploy && rm -f _build/esbuild*"
  },
  ...
}
```

</Codecopy>

上傳至 Gigalixir

<Codecopy>

```shell
git add elixir_buildpack.config phoenix_static_buildpack.config assets/package.json
git commit -m "Ready to Gigalixir"
git push gigalixir
```

</Codecopy>

最後應該會給你，你的 APP 網址 `https://pdtd.gigalixirapp.com/`

<Codecopy>

```shell
...
remote: Try hitting your app with:     curl https://pdtd.gigalixirapp.com/
remote: Check your app logs with:      gigalixir logs -a pdtd
remote: Check deploy status with:      gigalixir ps -a pdtd
remote: Updated property [core/account].
...
```

</Codecopy>

先確認執行狀態，等 status 轉變成 "Healthy"

<Codecopy>

```shell
gigalixir ps
```

</Codecopy>

或是檢查看看 log

<Codecopy>

```shell
gigalixir logs
```

</Codecopy>

眼尖的你可能發現會發現log中為啥 Endpoint 指向的 host 是 `example.com`？

那是因為 `config/runtime.exs` 中的環境變數 `PHX_HOST` 我們從來沒有設定過

<Codecopy>

```elixir title="config/runtime.exs"
...
host = System.get_env("PHX_HOST") || "example.com"
port = String.to_integer(System.get_env("PORT") || "4000")
...
```

</Codecopy>

## 設定 Gigalixir 上的環境變數

設定 PHX_HOST 環境參數，用剛剛得到的 APP 網址除去 https://

<Codecopy>

```shell
gigalixir config:set PHX_HOST=pdtd.gigalixirapp.com
```

</Codecopy>

驗證參數

<Codecopy>

```shell
gigalixir config
```

</Codecopy>

若要移除參數

<Codecopy>

```shell
gigalixir config:unset PHX_HOST
```

</Codecopy>

## 完成 Deploy

現在你登入網址上去看看，應該可以看到成果了。

這個範例，並沒有用到 Database 或 LiveView，若有用到還需要額外的一些步驟。

## (額外) 部署 Postgres

若是你的 Project 有使用到 Postgres 的話，我們還需要在 Gigalixir 上建立一個免費的資料庫

<Codecopy>

```shell
gigalixir pg:create --free
```

</Codecopy>

確認了解免費的資料庫並不適合用作 production 等級來使用

<Codecopy>

```shell
❯  gigalixir pg:create --free
A word of caution: Free tier databases are not suitable for production and migrating from a free db to a standard db is not trivial. Do you wish to continue? [y/N]: y
```

</Codecopy>

驗證 Config，環境變數有新增 `DATABASE_URL` 與 `POOL_SIZE`

<Codecopy>

```shell
gigalixir config
```

</Codecopy>

驗證 Database 已經創建

<Codecopy>

```shell
gigalixir pg
```

</Codecopy>

進行 DB Migration

<Codecopy>

```shell
gigalixir run mix ecto.migrate
```

</Codecopy>

確認狀態

<Codecopy>

```shell
gigalixir logs
```

</Codecopy>

## (額外) 其他設定

修改 `config/runtime.exs` 的 `Repo`，確保與 database 之間連線是採用SSL

<Codecopy>

```elixir title="config/runtime.exs"
  config :pdtd, Pdtd.Repo,
    ssl: true,
...
```

</Codecopy>

修改 `config/prod.exs` 的 `Endpoint`

<Codecopy>

```elixir title="config/runtime.exs" {3,4}
...
  config :pdtd, PdtdWeb.Endpoint,
    cache_static_manifest: "priv/static/cache_manifest.json",
    force_ssl: [rewrite_on: [:x_forwarded_proto]],
    check_origin: ["https://pdtd.gigalixirapp.com"]
...
```

</Codecopy>

`force_ssl` 確保連線全部強迫改使用 https 來連線。

<Codecopy>

```shell
❯ curl -s -D- http://pdtd.gigalixirapp.com/
HTTP/1.1 301 Moved Permanently
...
```

</Codecopy>

`check_origin` 如果不設定網域的話，你如果有用到 liveview 的話，你會碰到以下錯誤。

<Codecopy>

```shell
This issue might be specific for subdomains. Not very sure in what other contexts this issue arrises.
  
[error] Could not check origin for Phoenix.Socket transport.
  
This happens when you are attempting a socket connection to
a different host than the one configured in your config/
files. For example, in development the host is configured
to "localhost" but you may be trying to access it from
"127.0.0.1". To fix this issue, you may either:

  1. update [url: [host: ...]] to your actual host in the
     config file for your current environment (recommended)

  2. pass the :check_origin option when configuring your
     endpoint or when configuring the transport in your
     UserSocket module, explicitly outlining which origins
     are allowed:

        check_origin: ["https://example.com",
                       "//another.com:888", "//other.com"]
```

</Codecopy>

修改 `config/runtime.exs` ，增加網頁壓縮

<Codecopy>

```elixir title="config/runtime.exs" {7}
    http: [
      # Enable IPv6 and bind on all interfaces.
      # Set it to  {0, 0, 0, 0, 0, 0, 0, 1} for local network only access.
      # See the documentation on https://hexdocs.pm/plug_cowboy/Plug.Cowboy.html
      # for details about using IPv6 vs IPv4 and loopback vs public addresses.
      ip: {0, 0, 0, 0, 0, 0, 0, 0},
      port: port,
      compress: true
    ],
```

</Codecopy>

## 客製化網域

新增要連結的網域，然後根據後續的指示，到你的 DNS 管理商那邊新增 CNAME 紀錄

<Codecopy>

```shell
gigalixir domains:add {domain}
```

</Codecopy>

刪除連結的網域。(刪除 APP 前需要先刪除連結的網域)

<Codecopy>

```shell
gigalixir domains:remove {domain}
```

</Codecopy>

## 刪除部署

若有甚麼問題，想要取消部署的話，請參照以下

若有 database，先刪除

<Codecopy>

```shell
gigalixir ps:scale --replicas=0
gigalixir pg
gigalixir pg:destroy -d {database-id}
```

</Codecopy>

刪除 app

<Codecopy>

```shell
gigalixir apps:destroy
```

</Codecopy>

驗證刪除

<Codecopy>

```shell
❯ gigalixir apps
[]
```

</Codecopy>

## 最後

更多詳細資訊，請參考 [Gigalixir 官方手冊](https://gigalixir.readthedocs.io/en/latest/deploy.html#how-to-deploy-an-app)。

## 完結
