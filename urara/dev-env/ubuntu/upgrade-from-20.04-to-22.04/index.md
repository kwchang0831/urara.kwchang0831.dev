---
title: 升級 Ubuntu 從 20.04 至 22.04 (Jammy Jellyfish)
description: 升級 Ubuntu 從 20.04 至 22.04 (Jammy Jellyfish)
summary: 記錄一下過程，家裡還有很多台 Ubuntu 需要升級一下
published: 2022-05-31
cover: /dev-env/ubuntu/upgrade-from-20.04-to-22.04/cover.webp
tags:
  - 中文
  - 開發環境
  - Ubuntu
  - 2022
---

<script lang="ts">
  import Codecopy from '$lib/components/extra/codecopy.svelte'
  import Img from '$lib/components/extra/zoom.svelte'
</script>

## 開頭

這篇文章主要是紀錄一下從 Ubuntu 20.04 升級到 22.04 (Jammy Jellyfish) 的過程。

家裡還有很多台需要升級一下。

>! 升級前記得要備份重要文件。

## 環境

本文所使用的系統環境。

<Codecopy>

```shell
> lsb_release -a
  
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 20.04.4 LTS
Release:        20.04
Codename:       focal
```

</Codecopy>

## 確認空間

最好確認一下有足夠空間可供升級使用，最好能有 25GB 以上。

<Codecopy>

```shell
df -H
```

</Codecopy>

## 開始更新

先把套件都更新與升級。

<Codecopy>

```shell
sudo apt update -y && sudo apt upgrade -y
```

</Codecopy>

<Codecopy>

```shell
sudo apt dist-upgrade
```

</Codecopy>

清除已經不需要的套件安裝檔案

<Codecopy>

```shell
sudo apt autoremove
```

</Codecopy>

確保有安裝 `updrate-manager-core` 套件

<Codecopy>

```shell
sudo apt install update-manager-core
```

</Codecopy>

重開機

<Codecopy>

```shell
sudo reboot
```

</Codecopy>

確認一下是否有升級。目前暫時還沒有 22.04 LTS。

<Codecopy>

```
> sudo do-release-upgrade --check-dist-upgrade-only
  
Checking for a new Ubuntu release
There is no development version of an LTS available.
To upgrade to the latest non-LTS development release
set Prompt=normal in /etc/update-manager/release-upgrades.
```

</Codecopy>

使用 `-d` 參數，繼續升級至最新開發版，即使 LTS 版本還沒出來。

<Codecopy>

```shell
sudo do-release-upgrade -d --allow-third-party
```

</Codecopy>

若是有提示會為 SSH 新開一個 Port 於 '1022'， 以免升級中途出了甚麼意外比較難處理。

輸入 y 繼續。然後按下 [Enter] 繼續。

詢問是否開始升級，輸入 y 確認升級。

![fig01.avif](upgrade-from-20.04-to-22.04/fig01.avif)

選擇 [Yes] 不用再先詢問，全部都可以直接重啟服務，繼續。

![fig02.avif](upgrade-from-20.04-to-22.04/fig02.avif)

接下來，升級會需要一段時間...

中間若有詢問其他問題，依個人需要決定 yes | no 。

最後會詢問是否重開機，選擇 'y' 重開機。

![fig03.avif](upgrade-from-20.04-to-22.04/fig03.avif)

## 檢查升級

確認一下版本已經是 `22.04`。

<Codecopy>

```shell
> lsb_release -a
  
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.04 LTS
Release:        22.04
Codename:       jammy
```

</Codecopy>

確認一下套件更新

<Codecopy>

```shell
sudo apt update -y && sudo apt upgrade -y
```

</Codecopy>

## 清除垃圾

<Codecopy>

```shell
sudo apt --purge autoremove
```

</Codecopy>

<Codecopy>

```shell
sudo apt autoclean
```

</Codecopy>

## 最後

這樣就完成升級了。

## 完結
