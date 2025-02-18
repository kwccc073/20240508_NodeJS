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
### 機器人運作方式圖說 (影片03:28:38)
### 建立LINE機器人帳號 - Line developer (影片02:16:22)
### 建立資料夾 - line (影片02:20:10)

### 安裝套件 - 指令為： npm i 套件名稱 (影片02:21:50)
#### line bot (影片02:31:48) － 可參考<a href="https://www.npmjs.com/package/linebot">連結</a>
* 引入linebot套件 (影片02:33:01)
  ```import linebot from "linebot"```
* 機器人的channelId、channelSecret、channelAccessToken (影片02:34:06)
* 開啟機器人 ```bot.listen()``` (影片03:27:13)
* 機器人事件 ```bot.on(事件名稱, function)``` (影片03:31:30)
* 回覆訊息 ```event.reply() (影片03:57:00)

#### dotenv (影片02:41:42) - 可參考<a href="https://www.npmjs.com/package/dotenv">連結</a>
* dotenv的功用說明 (影片02:44:38)

#### eslint (影片02:52:35)
* 指令 npx eslint --init (影片03:04:11)
* 指令 npm init @eslint/config@1.0 (影片03:10:52)
* 存檔自動修復eslint的排版錯誤 (影片04:47:33)

#### axios (影片04:19:43)
#### nodemon (影片04:28:39)

### 建立檔案 - index.js (影片02:32:02)
### 環境設定檔 - .env (影片02:34:30)
### 連接阜 (影片03:39:29)
### 實測 - 開啟終端機 + 傳訊息給機器人
### Postman (影片04:11:26)
