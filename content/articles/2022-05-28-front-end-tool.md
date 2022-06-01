---
title: 2022 前端常用的套件與工具
summary: 這裡收集了我開發前端時，常用的套件與工具
image: /images/articles/2022-04-10-mas-os-tool/cover.png
status: true
category: frontend
tags:
  - javascript
  - html
  - css
---

## nvm

NVM 是 Node Version Manager 的縮寫，主要功能就可以快速切換 Node.js 版本。

使用場景：

1. 維護多個不同時期所開發專案
2. 編譯老舊專案

Linux / MacOS 安裝方式

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

在終端機設定檔 bash 環境下編輯 `~/.bashrc` 或 zsh 環境下編輯 `~/.zshrc`

在文件內加入以下設定：

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
然後執行下面指令

- bash：`source ~/.bashrc`
- zsh: `source ~/.zshrc`

## yarn

是 Facebook 所開發的前端工具，是 Node.js 的套件管理，算是 npm 的替代品，優點是速度較快。

安裝方式：

**使用 npm 安裝**
```bash
npm install -g yarn
```
**MacOS安裝**

```bash
brew install yarn
```

**Ubuntu安裝**

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -  

sudo apt-get update && sudo apt-get install yarn 
```

## Nuxt.js

是一個 Vue.js 框架，
