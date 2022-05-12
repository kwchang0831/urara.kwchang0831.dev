---
title: 01. Elixir 簡略介紹與安裝筆記
description: 讓我們一起學 Elixir 系列。 01. 簡略介紹與安裝筆記。 建議使用 Linux 或 macOS 來安裝。本篇文章主要紀錄使用 Ubuntu 與 asdf 來安裝 Elixir。
summary: 簡略介紹 Elixir 與使用 asdf 來安裝 Elixir 的流程
published: 2022-05-11
cover: /elixir/install/cover.avif
series_title: '#Learn-Elixir 系列'
series_name: ⚡ 讓我們一起學 Elixir 🧪
tags:
  - 中文
  - Ubuntu
  - Elixir
  - Learn-Elixir
  - 2022
---

## 開頭

> Elixir 是一個基於 Erlang 虛擬機器的函數式、面向並列的通用程式語言。Elixir 以 Erlang 為基礎，支援分散式、高容錯、即時應用程式的開發，亦可通過巨集實現元程式設計對其進行擴充，並通過協定支援多型。
>
> -- [Wikipedia](https://zh.wikipedia.org/zh-tw/Elixir)

## 簡略介紹

Elixir 是一個需要編譯的程式語言 (Compiled)，但可以用起來可以像直譯式語言一樣 (Interpreted)。像 Python 一樣，可以在 Shell 直接執行一行指令馬上就可以得到答案。

Elixir 是函數式類型的語言，程式的組成都是使用函數 (Functions)，並不需要學習甚麼 OO 物件導向概念。 再來就是 Elixir 中的變數 (Variables) 都是不可變動的 (Immutable)，所以在撰寫並行運算的時候相對於其他語言簡單許多，不需要擔心變數何時會被其他線程串改。

Elixir 擴充性很高，最好的證明就是 Elixir 本身有 90% 以上都是用自己寫出來。

去看看 "[Elixir 原始碼庫](https://github.com/elixir-lang/elixir)"。

![install/fig01.avif](install/fig01.avif)

Elixir 還有很多很酷的好處。我們以後再聊吧。這次就先把它安裝起來，玩玩看再說。

## Windows 用戶

建議使用 Linux 來當開發環境。Windows 用戶也可以用 WSL 來安裝 Linux，建議參考 "[Windows 10 上安裝 WSL + Ubuntu](/dev-env/wsl/ubuntu)"。然後接續參考下面的 Ubuntu 安裝流程。

不然的話，直接使用 [choco](https://community.chocolatey.org/packages/Elixir) 安裝即可。後續就可以直接略過了。

```shell
sudo choco install elixir -y
```

## Ubuntu 用戶

這邊有測試過的 Ubuntu 版本有：

- Ubuntu 20.04 LTS
- Ubuntu 22.04 LTS

### asdf 安裝

asdf 是一個軟體版本管理工具，可以讓你安裝不同版本的套件並隨時切換。

更多介紹請參考 "[官網文件](https://asdf-vm.com/guide/introduction.html#homebrew)"。

安裝前置需求

```shell
sudo apt-get install curl git -y
```

安裝 asdf

```shell
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
```

### zsh 整合套件

若還沒有安裝 zsh ，可以參考 "[美化 Ubuntu Terminal - Zsh + Oh My Zsh + 一些好用的插件](/dev-env/ubuntu/oh-my-zsh)"。

打開 zsh 設定檔

```shell
vi ~/.zshrc
```

`~/.zshrc` 新增 asdf 插件到 plugins

```shell title="~/.zshrc"
plugins=(asdf ...)
```

`~/.zshrc` 文件最底新增 asdf 自動完成 (auto-completion)

```shell title="~/.zshrc"
# append completions to fpath
fpath=(${ASDF_DIR}/completions $fpath)
# initialise completions with ZSH's compinit
autoload -Uz compinit && compinit
```

更多資訊，請參考 "[官方安裝流程](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)"。

### 使用 asdf 安裝 Elixir

安裝需求套件 unzip

```shell
sudo apt-get install unzip -y
```

新增 Elixir 插件

```shell
asdf plugin add elixir
```

安裝 Elixir 最新版

```shell
asdf install elixir latest
```

設定全域使用的 Elixir 版本

```shell
asdf global elixir latest
```

有任何 asdf-elixir 插件的問題，請查看 [asdf-elixir 來源庫](https://github.com/asdf-vm/asdf-elixir)。

### (選用) 更多 asdf 操作

安裝 Elixir 特定版本

```shell
asdf install elixir 1.13.4
```

設定本地區域使用的 Elixir 版本
(必須是有安裝過的版本)

```shell
asdf local elixir 1.13.4
```

顯示目前已安裝的 Elixir 版本

```shell
asdf list elixir
```

顯示所有可安裝的 Elixir 版本

```shell
asdf list all elixir
```

顯示目前設定所有套件使用的版本

```shell
asdf curren
```

查看更多指令

```shell
asdf help
```

### (建議) 使用 asdf 安裝 Erlang

安裝所有前置套件

```shell
sudo apt-get install build-essential autoconf m4 libncurses5-dev libwxgtk3.0-gtk3-dev libwxgtk-webview3.0-gtk3-dev libgl1-mesa-dev libglu1-mesa-dev libpng-dev libssh-dev unixodbc-dev xsltproc fop libxml2-utils libncurses-dev openjdk-11-jdk -y
```

新增 Erlang 插件

```shell
asdf plugin add erlang
```

安裝 Erlang 最新版

```shell
asdf install erlang latest
```

設定全域使用的 Erlang 版本

```shell
asdf global erlang latest
```

有任何 asdf-erlang 插件的問題，請查看 [asdf-erlang 來源庫](https://github.com/asdf-vm/asdf-erlang)。

## 安裝後的測試

### Erlang Shell 查看版本

```shell
erl
```

結果類似於

```shell
Erlang/OTP 24 [erts-12.3.2] [source] [64-bit] [smp:12:12] [ds:12:12:10] [async-threads:1] [jit]

Eshell V12.3.2  (abort with ^G)
1>
```

### 離開 Erlang Shell

第一種方法： <kbd>Ctrl + C</kbd> 兩次

第二種方法： <kbd>Ctrl + G</kbd> 輸入 <kbd>q</kbd>

### 查看 Elixir 版本

```shell
elixir -v
```

結果類似於

```shell
Erlang/OTP 24 [erts-12.3.2] [source] [64-bit] [smp:12:12] [ds:12:12:10] [async-threads:1] [jit]

Elixir 1.13.4 (compiled with Erlang/OTP 24)
```

### 進入 Elixir Shell

進入互動式終端機 (iex)

```shell
iex
```

結果類似於

```shell
Erlang/OTP 24 [erts-12.3.2] [source] [64-bit] [smp:12:12] [ds:12:12:10] [async-threads:1] [jit]

Interactive Elixir (1.13.4) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

離開方式如同 Erlang Shell。

### 玩玩看

這邊就可以開始測試 Elixir 嚕。

第一個動作我們就是讓程式輸出 `Hello World`。

```shell
iex(1)> IO.puts("Hello World")
Hello World
:ok
iex(2)>
```

## 最後

我想說，還是自己動手學最棒了!

誰說一定要參加甚麼 ||管它付費還是免費的課程|| 才能學會呢?

我們的熱情不是靠 ||別人意義不名的審核|| 來下定論的。

只有我們自己，才是對我們自己來說 最好 最棒 的導師。

接下來，讓我們繼續一起學習下去吧。

## 完結
