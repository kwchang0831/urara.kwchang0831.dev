---
title: 美化 PowerShell 7 - Oh My Posh + 一些好用的插件
description: 本篇文章紀錄 使用 Oh My Posh 來美化 PowerShell 7（pwsh）並安裝一些插件讓開發環境更高效。 插件可以安裝 Posh Git 讓使用 Git 指令的時候有自動完成的功能，或是安裝 ZLocation 讓我們可以更快速地跳到想去的資料夾，等等...
summary: Oh My Posh 基本安裝與主題置換，並介紹一些好用的插件
published: 2021-09-08
cover: /dev-env/pwsh/oh-my-posh/cover.avif
tags:
  - 中文
  - 開發環境
  - Windows
  - Windows Terminal
  - pwsh
---

## 開頭

[Oh My Posh](https://ohmyposh.dev/) 是一個主題引擎可以美化 PowerShell 7 ，可新增插件進一步地擴充功能性與提高使用效率。
包含指令自動完成，快速切換資料夾等等。

本篇文章紀錄 Oh My Posh 的安裝與主題置換來美化你的 PowerShell 7（pwsh），並可更改主題 (theme)，讓工作環境更高效。

本篇文章會介紹以下套件的安裝：

- Oh My Posh
- Git
- pwsh10k 主題
- Posh-Git
- ZLocation
- NeoFetch
- WinFetch

## 環境配置

本篇文章的環境配置如下：

- Windows 10
- Windows Terminal
- PowerShell 7

## (建議) 安裝 gsudo

推薦安裝 gsudo ，可以更方便地提升權限到系統管理員權限，  
請參考： [gsudo - 讓 Windows 也有 sudo 功能](/dev-env/gsudo)

## 安裝 PowerShell 7

若還沒有安裝最新版的 PowerShell 7 ，  
請參考： [PowerShell 7 - 來安裝最新版的 PowerShell](/dev-env/pwsh)

## 安裝 Git

### 安裝 1. 使用 chocolatey 安裝

若還沒有安裝 Git ，可以使用 [chocolatey](https://chocolatey.org/install) 來安裝。

以系統管理員權限打開 PowerShell 輸入，

```shell
choco install git -y
```

或是使用 gsudo 取得一次性系統管理員權限來安裝

```shell
sudo choco install git -y
```

### 安裝 2. 手動安裝

若還沒有安裝 Git ，可以從以下網址下載安裝檔：  
https://gitforwindows.org/

## 安裝 Patched 字型

為了 Oh My Posh 的主題可以正常顯示字型與圖示，下載以下四個字型並安裝:

- [MesloLGS NF Regular.ttf](https://github.com/romkatv/dotfiles-public/raw/master/.local/share/fonts/NerdFonts/MesloLGS%20NF%20Regular.ttf)
- [MesloLGS NF Bold.ttf](https://github.com/romkatv/dotfiles-public/raw/master/.local/share/fonts/NerdFonts/MesloLGS%20NF%20Bold.ttf)
- [MesloLGS NF Italic.ttf](https://github.com/romkatv/dotfiles-public/raw/master/.local/share/fonts/NerdFonts/MesloLGS%20NF%20Italic.ttf)
- [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/dotfiles-public/raw/master/.local/share/fonts/NerdFonts/MesloLGS%20NF%20Bold%20Italic.ttf)

## 更改字型

### Windows Terminal

<kbd>Ctrl + ,</kbd> 打開設定，選擇 PowerShell 7 的設定檔 `外觀 > 字型`，將字型改成 `MesloLGS NF` 之後儲存。

![fig01](oh-my-posh/fig01.avif)

### PowerShell 7

以系統管理員身分執行 PowerShell 7(x64)  
更改字型為 `MesloLGS NF`

![fig02](oh-my-posh/fig02.avif)

## 安裝 Oh My Posh

1.安裝 Oh My Posh

```shell
Install-Module oh-my-posh -Scope CurrentUser
```

輸入 [A] Yes to All ，全部同意。

2.更新 oh-my-posh

```shell
Update-Module oh-my-posh
```

### 新增/修改 PowerShell 用戶檔案

用習慣的文字編輯器編輯`$Profile`

```shell
notepad $Profile
```

添加以下，儲存後關閉。

```shell
Import-Module oh-my-posh
Set-PoshPrompt -Theme jandedobbeleer
```

重新開啟 Windows Terminal 後生效，  
或是輸入以下指令應用修改，

```shell
. $Profile
```

## 更改 Oh My Posh 主題

Oh My Posh 內建很多不同的主題 (theme)。

輸入以下指令查看內建的主題與預覽，

```shell
Get-PoshThemes
```

輸入以下指令可以查看內建主題的安裝位置，

```shell
Get-PoshThemes -list
```

我們可以直接輸入指令來更改主題嘗試看看，

```shell
Set-PoshPrompt -Theme Agnoster
```

如果確定好了，讓我們修改 `$Profile` 來設定預設要使用的主題，

```shell
notepad $Profile
```

`Set-PoshPrompt` 的部分改成想要的主題名稱

```shell
Set-PoshPrompt -Theme Agnoster
```

重新開啟 Windows Terminal 後生效，  
或是輸入以下指令應用修改，

```shell
. $Profile
```

# (推薦) 安裝主題 pwsh10k

pwsh10k 是一個 Oh My Posh 的主題。  
https://github.com/Kudostoy0u/pwsh10k

1.下載 pwsh10k

```shell
git clone https://github.com/Kudostoy0u/pwsh10k.git
```

2.安裝 pwsh10k

```shell
cd pwsh10k
./install.ps1
```

3.編輯 `$Profile` 來修改預設要使用的主題，

```shell
notepad $Profile
```

`Set-PoshPrompt` 的部分改成

```shell
Set-PoshPrompt -Theme ~/pwsh10k.omp.json
```

重新開啟 Windows Terminal 後生效，  
或是輸入以下指令應用修改，

```shell
. $Profile
```

## (選用) 安裝插件 [posh-git](https://github.com/dahlbyk/posh-git)

[posh-git](https://github.com/dahlbyk/posh-git) 可以讓 Git 的指令可以自動完成 (auto completion)

1.安裝 posh-git

```shell
Install-Module posh-git -Scope CurrentUser
```

輸入 [A] Yes to All ，全部同意。

2.更新 oh-my-posh

```shell
Update-Module posh-git
```

3.更新 $Profile 檔案

在 `$Profile` 檔案最後一行新增以下指令：

```shell
Import-Module posh-git
$env:POSH_GIT_ENABLED = $true
```

根據 Oh My Posh 官方手冊，預設 Posh Git 的功能是關閉的，我們需要更改環境變數才能讓它開啟。

## (選用) 安裝插件 [ZLocation](https://github.com/vors/ZLocation)

[ZLocation](https://github.com/vors/ZLocation) 類似於 [autojump](https://github.com/wting/autojump) 或是 [Zsh-z](https://github.com/agkozak/zsh-z) 的插件，  
可以用關鍵字直接跳到想去的資料夾，比使用 `cd` 更快速。

1.安裝 ZLocation

用 PowerShell 輸入以下指令：

```shell
Install-Module ZLocation -Scope CurrentUser
```

輸入 [A] Yes to All ，全部同意。

2.修改使用者設定

```shell
notepad $Profile
```

在 `$Profile` 檔案最後一行新增以下指令，

```shell
Import-Module ZLocation
```

重新開啟 Windows Terminal 後生效，  
或是輸入以下指令應用修改，

```shell
. $Profile
```

### ZLocation 使用方式

查看已知的資料夾位置

```shell
z
```

進入包含此字串的資料夾，可以用 `Tab` 來選擇結果，如果有多個資料夾符合 doc 的話。

```shell
z doc
```

回到之前的資料夾

```shell
z -
```

## (選用) 安裝 NeoFetch

NeoFetch 用來顯示電腦配置。

打開 `PowerShell` 輸入以下指令，

1.設定 Policy

```shell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

2.安裝 Scoop

```shell
iwr -useb get.scoop.sh | iex
```

[Scoop](https://scoop.sh/) 就像 Mac 的 [Homebrew](https://brew.sh/) 一樣讓可以我們更快速地用指令行安裝軟體。

3.安裝 NeoFetch

即使已經有安裝 git 了，這邊還是要安裝 git ，因為 neofetch 會直接使用 scoop 安裝的 git 。

```shell
scoop install git
scoop install neofetch
```

4.執行 NeoFech

```shell
neofetch
```

## (選用) 安裝 WinFetch

功能跟 NeoFetch 相似，也是用來顯示電腦配置。

1.安裝 WinFetch

以系統管理員身分打開 PowerShell 輸入以下指令：

```shell
choco install winfetch -y
```

如果有安裝 `gsudo` ，可以使用以下指令直接以系統管理員權限安裝

```shell
sudo choco install winfetch -y
```

2.執行 WinFetch

```shell
WinFetch
```

## 參考資料

- https://github.com/PowerShell/PowerShell
- https://ohmyposh.dev/
- https://github.com/dahlbyk/posh-git

## 完結
