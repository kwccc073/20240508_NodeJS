// import 必須要寫在檔案最上面

// 預設引用---------------------------------------------------------------------------------
// 將 a.js 的 export default 引用進來，取名為 a (a可以換掉)
/* 
   import 變數 from 來源
   來源為 'a.js'   ---> 表示是引用 名為a.js 的套件
   來源為 './a.js' ---> 表示是引用 名為a.js 的檔案
*/
import a from './a.js' // 此行執行a.js裡面的所有程式碼，並將a.js的export default 引用進來

// 具名引用 -----------------------------------------------------------------------------------
// 一次引用 b.js 的所有 export，取名為 b
import * as b from './b.js'
// 只引用 b1 和 b2
import { b1, b2, b3 } from './b.js'
// 只引用 b1，用 as 重新命名為 bb1（防止index.js檔案也有東西叫b1）
import { b1 as bb1 } from './b.js'

// 預設引用 + 具名引用 -----------------------------------------------------------------------------------
// 引用 export default 取名為 c
// 引用所有 export 並取名為 cc
import c, * as cc from './c.js'
// 只取 export c1 重新命名為 cc1
import { c1 as cc1 } from './c.js'

// --------------------------------------------------------------------------------------------------------


// 對檔案a.js 的處理---------------------------------------------
console.log('index - a.a1: ' + a.a1)  // 1
console.log('index - a.add: ' + a.add()) // 6
/* 以下程式碼為 Pass by Value vs. Reference 的說明：
    import 進來的值如果是number => 改值只會改到現在這個檔案的值，而不會改到原始被引用進來那個檔案自己的值 (pass by value)
    但如果是陣列或物件就可以改到原始那個檔案的值 (Pass by Reference) */
a.a1 = 100
a.a2 = 100
// a.a3 = 100
a.test(500)
a.a4.push(300)
// 現在 index.js裡的 a1~a4的值
console.log('index - a.a1: ' + a.a1) // 100
console.log('index - a.a2: ' + a.a2) // 100
console.log('index - a.a3: ' + a.a3) // 3
console.log('index - a.a4: ' + a.a4) // 100,200,300
// a.js這份檔案裡 a1~a4 的值
a.log()


// 對檔案b.js 的處理-------------------------------------
console.log('index - b.b1: ' + b.b1)
console.log('index - b1: ' + b1)
console.log('index - bb1: ' + bb1)

/* 具名引用進來的會是 Readonly，不能用 = 換掉
   b.b1 = 100
   => TypeError: Cannot assign to read only property 'b1' of object '[object Module]' 
*/

/* 單獨引用的會是 const，不能用 = 換掉
   TypeError: Assignment to constant variable.
   b1 = 100
   b3 = 100
*/

b.test(500) // 可以成功將原始檔案的b3改成500
b.b4.push(300)
console.log('index - b.b3: ' + b.b3)
console.log('index - b.b4: ' + b.b4)
b.log()

// 對檔案c.js 的處理-------------------------------------
console.log('index - c.c3: ' + c.c3)
console.log('index - cc.c1: ' + cc.c1)
