---
title: '[草稿] 02. Elixir 學習 - 跨出第一步'
description: 讓我們一起學 Elixir 系列。 02. Elixir 學習 - 跨出第一步。 簡短介紹 Elixir 與 免費的學習資源。之後就開始動手來撰寫第一個 Elixir 程式。
summary: 簡短介紹 Elixir 與 開始動手來撰寫第一個 Elixir 程式
published: 2022-05-18
cover: /elixir/start/cover.avif
coverText: 'Cover Photo by <a href="https://unsplash.com/@aamir_in?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="nofollow noopener noreferrer external" target="_blank">Aamir Suhail</a> on <a href="https://unsplash.com/photos/ATlRqTCbvV4" rel="nofollow noopener noreferrer external" target="_blank">Unsplash</a>'
series_title: '#Learn-Elixir 系列'
series_name: ⚡ 讓我們一起學 Elixir 🧪
tags:
  - 中文
  - Elixir
  - Learn-Elixir
  - 2022
---

<script lang="ts">
  import Img from '$lib/components/extra/zoom.svelte'
</script>

## 開頭

每個人學習方式都不盡相同。

或許很多人會建議你應該提前做準備，先做好各種理論的學習。希望能讓你避開問題，從而減少失敗。但，那些建議真的能夠讓你避開所有問題嗎? 還是只是讓你緩慢地失敗，到後來失敗之後反而不知所措，一蹶不振。

對我來說，我喜歡的學習方式是 [Learning by Doing](https://en.wikipedia.org/wiki/Learning-by-doing) 與 Fail Fast。直接開始做就對了，錯了也沒關係。我希望更早遇到錯誤與失敗，在每次失敗之後與修正失敗之後，我站起來的腳步也會越來越來穩固。

當然，這不一定適合所有人。但，歡迎參考。

<Img src="start/fig01.avif">

Figure 01. by [Aaron Davis](https://www.flickr.com/photos/aaron_davis/16453803047)

</Img>

## 為甚麼要學習 Elixir?

因為好玩。學習就是快樂的泉源。難道你已經忘了小時候那最純粹的快樂了嗎?

<Img src="start/fig02.avif">

Figure 02. by [Ben White](https://unsplash.com/@benwhitephotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/4K2lIP0zc_k)

</Img>

## 簡略介紹 Elixir

> Elixir 是一個基於 Erlang 虛擬機器的函數式、面向並列的通用程式語言。Elixir 以 Erlang 為基礎，支援分散式、高容錯、即時應用程式的開發，亦可通過巨集實現元程式設計對其進行擴充，並通過協定支援多型。
>
> -- [Wikipedia](https://zh.wikipedia.org/zh-tw/Elixir)

Elixir 是一個需要編譯的程式語言 (Compiled)，但用起來可以像直譯式語言一樣 (Interpreted)，可以在 Shell 直接執行指令馬上就可以得到回應，像 Python 一樣。

Elixir 是函數式類型的語言，程式的組成都是使用函數 (Functions)，並不需要學習甚麼 OO 物件導向概念。 再來就是 Elixir 中的變數 (Variables) 都是不可變動的 (Immutable)。在撰寫並行運算的時候相對於其他語言簡單許多，不需要擔心變數何時會被其他線程串改。

Elixir 擴充性很高，最好的證明就是 Elixir 本身有 90% 以上都是用自己寫出來。

去看看 "[Elixir 原始碼庫](https://github.com/elixir-lang/elixir)"。

![install/fig01.avif](install/fig01.avif)

## Elixir 可以用來幹嘛?

Elixir 可以用來做後端伺服器 (Back End) 或是全端的網頁 (Full Stack Web) 甚至嵌入式系統 (Embedded) 與 IoT 相關的都有。若是不知道前面說的那些是甚麼東西，無所謂，反正學下去就知道可以幹甚麼了。

這邊就給一個著名的例子，聊天軟體 [Discord]() 的後端伺服器是用 Elixir 打造的：
[Real time communication at scale with Elixir at Discord](https://elixir-lang.org/blog/2020/10/08/real-time-communication-at-scale-with-elixir-at-discord/) 。

若想知道更多有哪些公司有在用 Elixir，請參考 [Elixir 案例](https://elixir-lang.org/cases.html)。

## Elixir 的學習資源

網上有很多資源可以學習 Elixir，要花錢的學習資源我這邊就都略過了。

我這邊整理出一些免費的學習資源給各位參考。

- [elixir-lang.org](https://elixir-lang.org/getting-started/introduction.html)

  官方指南。只有英文。內有說明加上範例。

- [Elixir School](https://elixirschool.com/zh-hant/lessons/basics/basics)

  學習手冊。有中文。可以拿來跟官方指南一起用，相輔相成。

- [Exercism](https://exercism.org/tracks/elixir)

  提供練習題目，直接動手寫碼來學習語言的平台。雖然沒有中文，但這平台可以讓你的學習速度倍增。

除此之外，還可以透過 [Github](https://github.com/) 上別人的 Learn-By-Doing 專案來參考學習，例如：

- [seven1m/30-days-of-elixir](https://github.com/seven1m/30-days-of-elixir)

  30 天自我學習的紀錄，或許對你有幫助。

- [kwchang0831/path-learning-elixir](https://github.com/kwchang0831/path-learning-elixir)

  沒錯，這是我的學習紀錄。我也還正在用空閒的時間學習中。

## 未完待續

後續還在撰寫中...

## 玩玩看

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

||誰說一定要參加甚麼管它付費還是免費的課程才能學寫程式? 才能當軟體工程師呢?||

||我們的熱情不是靠來自他人意義不名的審核來下定論的。||

只有我們自己，才是對我們自己來說 最好 最棒 的導師。

接下來，讓我們繼續一起學習下去吧。

## 完結
