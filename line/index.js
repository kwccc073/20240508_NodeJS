// (固定寫法) 引入套件dotenv => 自動讀取.env檔 => 讀取到的東西會自動放入「process.env」這個變數裡面
import "dotenv/config";
// linebot步驟 - 1: 引入套件linebot的 export default，並命名為linebot
import linebot from "linebot";
import axios from "axios";

// linebot步驟 - 2: 代入機器人的帳號密碼
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

// linebot步驟 - 4:
// bot.on(事件名稱, function)
// message => 收到訊息時
// event表示該事件的一些資訊
bot.on("message", async (event) => {
  // console.log(event)

  if (event.message.type !== "text") return; // 非文字訊息不處理

  try {
    /* 範例：鸚鵡功能---------------------------------------
    const result = await event.reply(event.message.text);
    console.log(result); */

    // 範例：使用者傳storeno，機器人回傳storename、storeaddr、contacttel-----------------------------------------------
    // 取得這個連結裡的資料
    const { data } = await axios.get(
      "https://data.moenv.gov.tw/api/v2/gp_p_01?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate%20desc&format=JSON"
    );
    // 對連結裡的資料跑迴圈
    for (const record of data.records) {
      // 當迴圈跑到跟event.message.text是一樣的值時
      if (record.storeno === event.message.text) {
        const result = await event.reply([
          record.storename,
          record.storeaddr,
          record.contacttel,
        ]);
        console.log(result);
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// linebot步驟 - 3: 開啟機器人
// http://localhost:3000/
bot.listen("/", 3000, () => {
  console.log("機器人啟動");
});
/* 運作原理
   當LINE收到訊息後，LINE會將收到的東西傳到http://localhost:3000/
   處理完之後會將結果回傳到LINE的server
*/