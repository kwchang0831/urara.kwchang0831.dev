---
title: 01. Elixir 安裝筆記 (Windows, Ubuntu, macOS)
description: 讓我們一起學 Elixir 系列。 01. 安裝筆記。 建議使用 Linux 來安裝。本篇文章主要紀錄在 Windows 與 Ubuntu 上安裝 Elixir 的流程，包含使用 asdf 版本管理器來安裝。
summary: Elixir 安裝流程，包含使用 asdf 版本管理器來安裝 Elixir
published: 2022-05-11
cover: /elixir/install/cover.webp
series_title: '#Learn-Elixir 系列'
series_name: ⚡ 讓我們一起學 Elixir 🧪
tags:
  - 中文
  - Ubuntu
  - macOS
  - Windows
  - Elixir
  - Learn-Elixir
  - 2022
---

<script lang="ts">
  import Codecopy from '$lib/components/extra/codecopy.svelte'
</script>

## Windows 安裝 Elixir

建議使用 Linux 來當開發環境。Windows 用戶可以用 WSL 在 Windows 上安裝 Linux，建議參考 "[Windows 10 上安裝 WSL + Ubuntu](/dev-env/wsl/ubuntu)"，接續參考下面的 Ubuntu 安裝流程。

不然的話，直接使用 [choco](https://community.chocolatey.org/packages/Elixir) 安裝即可。後續就可以直接略過了。

<Codecopy>

```shell
sudo choco install elixir -y
```

</Codecopy>

## Ubunut & macOS 安裝 asdf

asdf 是一個軟體版本管理工具，可以讓你安裝不同版本的套件並隨時切換。

更多介紹請參考 "[官網文件](https://asdf-vm.com/guide/introduction.html)"。

### Ubuntu

安裝前置需求

<Codecopy>

```shell
sudo apt-get install curl git -y
```

</Codecopy>

安裝 asdf

<Codecopy>

```shell
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
```

</Codecopy>

#### ZSH & Git

若還沒有安裝 zsh ，可以參考 "[美化 Ubuntu Terminal - Zsh + Oh My Zsh + 一些好用的插件](/dev-env/ubuntu/oh-my-zsh)"。

打開 zsh 設定檔

<Codecopy>

```shell
vi ~/.zshrc
```

</Codecopy>

`~/.zshrc` 新增 asdf 插件到 plugins

<Codecopy>

```shell title="~/.zshrc"
plugins=(asdf ...)
```

</Codecopy>

`~/.zshrc` 文件最底新增 asdf 自動完成 (auto-completion)

<Codecopy>

```shell title="~/.zshrc"
# append completions to fpath
fpath=(${ASDF_DIR}/completions $fpath)
# initialise completions with ZSH's compinit
autoload -Uz compinit && compinit
```

</Codecopy>

更多資訊，請參考 "[官方安裝流程 #ZSH & Git](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)"。

### macOS

安裝 asdf

<Codecopy>

```shell
brew install asdf
```

</Codecopy>

#### ZSH & Homebrew

若還沒有安裝 zsh ，可以參考 "[美化 macOS iTerm2 - Oh My Zsh + 一些好用的插件](/dev-env/macos/oh-my-zsh)"。

打開 zsh 設定檔

<Codecopy>

```shell
vi ~/.zshrc
```

</Codecopy>

`~/.zshrc` 新增 asdf 插件到 plugins

<Codecopy>

```shell title="~/.zshrc"
plugins=(asdf ...)
```

</Codecopy>

更多資訊，請參考 "[官方安裝流程 #ZSH & Homebrew](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)"。

## 使用 asdf 安裝 Elixir

安裝需求套件 unzip

<Codecopy>

```shell
sudo apt-get install unzip -y
```

</Codecopy>

新增 Elixir 插件

<Codecopy>

```shell
asdf plugin add elixir
```

</Codecopy>

安裝 Elixir 最新版

<Codecopy>

```shell
asdf install elixir latest
```

</Codecopy>

設定全域使用的 Elixir 版本

<Codecopy>

```shell
asdf global elixir latest
```

</Codecopy>

有任何 asdf-elixir 插件的問題，請查看 [asdf-elixir 來源庫](https://github.com/asdf-vm/asdf-elixir)。

### 更多 asdf 指令

安裝 Elixir 特定版本

<Codecopy>

```shell
asdf install elixir 1.13.4
```

</Codecopy>

設定本地區域使用的 Elixir 版本
(必須是有安裝過的版本)

<Codecopy>

```shell
asdf local elixir 1.13.4
```

</Codecopy>

顯示目前已安裝的 Elixir 版本

<Codecopy>

```shell
asdf list elixir
```

</Codecopy>

顯示所有可安裝的 Elixir 版本

<Codecopy>

```shell
asdf list all elixir
```

</Codecopy>

顯示目前設定所有套件使用的版本

<Codecopy>

```shell
asdf curren
```

</Codecopy>

查看更多指令

<Codecopy>

```shell
asdf help
```

</Codecopy>

## (建議) 使用 asdf 安裝 Erlang

安裝所有前置套件 (適用於 Ubuntu 20.04 LTS 以上)

<Codecopy>

```shell
sudo apt-get install build-essential autoconf m4 libncurses5-dev libwxgtk3.0-gtk3-dev libwxgtk-webview3.0-gtk3-dev libgl1-mesa-dev libglu1-mesa-dev libpng-dev libssh-dev unixodbc-dev xsltproc fop libxml2-utils libncurses-dev openjdk-11-jdk -y
```

</Codecopy>

新增 Erlang 插件

<Codecopy>

```shell
asdf plugin add erlang
```

</Codecopy>

安裝 Erlang 最新版

<Codecopy>

```shell
asdf install erlang latest
```

</Codecopy>

設定全域使用的 Erlang 版本

<Codecopy>

```shell
asdf global erlang latest
```

</Codecopy>

有任何 asdf-erlang 插件的問題，請查看 [asdf-erlang 來源庫](https://github.com/asdf-vm/asdf-erlang)。

## 安裝後的測試

### Erlang Shell 查看版本

<Codecopy>

```shell
erl
```

</Codecopy>

結果類似於

<Codecopy>

```shell
Erlang/OTP 25 [erts-13.0] [source] [64-bit] [smp:12:12] [ds:12:12:10] [async-threads:1] [jit:ns]

Eshell V13.0  (abort with ^G)
1>
```

</Codecopy>

### 離開 Erlang Shell

第一種方法： <kbd>Ctrl + C</kbd> 兩次

第二種方法： <kbd>Ctrl + G</kbd> 輸入 <kbd>q</kbd>

### 查看 Elixir 版本

<Codecopy>

```shell
elixir -v
```

</Codecopy>

結果類似於

<Codecopy>

```shell
Erlang/OTP 25 [erts-13.0] [source] [64-bit] [smp:12:12] [ds:12:12:10] [async-threads:1] [jit:ns]

Elixir 1.13.4 (compiled with Erlang/OTP 25)
```

</Codecopy>

### 進入 Elixir Shell

進入互動式終端機 (iex)

<Codecopy>

```shell
iex
```

</Codecopy>

結果類似於

<Codecopy>

```shell
Erlang/OTP 25 [erts-13.0] [source] [64-bit] [smp:12:12] [ds:12:12:10] [async-threads:1] [jit:ns]

Interactive Elixir (1.13.4) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

</Codecopy>

離開方式如同 Erlang Shell。

## 完結
