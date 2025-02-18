# 20240508_Node.js
NodeJS、LINE機器人
## Node.js檔案結構 (影片00:10:30)
## 建立Node.js專案 (影片00:26:07)
* 終端機設定－PowerShell => cmd (影片00:28:15)
* 初始化專案 - npm init => 產生package.json (影片00:34:01)
* 設定Node.js的語法規範 (影片00:44:00)

## 模組化概念 (影片00:46:16)
把程式碼拆分成一個個小模組，再組合在一起
### 預設引用 - 檔案a.js (影片00:46:50) 
* 建立檔案index.js (影片00:50:25) - import
* 指令－ node 檔案名稱 (影片00:55:19)
* 整個流程說明 (影片01:22:20)

### 具名引用 - 檔案b.js (影片01:30:40)
* import (影片01:33:34)

### 當檔案同時有預設引用和具名引用時 - 檔案c.js (影片01:53:40)


## LINE機器人
### 建立LINE機器人帳號 - Line developer (影片02:16:22)
### 建立資料夾 - line (影片02:20:10)

### 安裝套件 - 指令為： npm i 套件名稱 (影片02:21:50)
#### line bot (影片02:31:48) － 可參考<a href="https://www.npmjs.com/package/linebot">連結</a>
* 引入linebot套件 (影片02:33:01)
  ```import linebot from "linebot"```
* 機器人的channelId、channelSecret、channelAccessToken (影片02:34:06)
#### dotenv (影片02:41:42) - 可參考<a href="https://www.npmjs.com/package/dotenv">連結</a>
* dotenv的功用說明 (影片02:44:38)
### 建立檔案 - index.js (影片02:32:02)
### 環境設定檔 - .env (影片02:34:30)
