<!--
 * @Descripttion: 
 * @version: 1.0.6
 * @Author: sauron.pan
 * @Date: 2022-06-16 19:00:35
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-17 16:47:25
-->
# sauron-npm

```
郑总愿不愿意和我一起维护这个 npm 仓库(手动狗头)
```

安装（latest：1.0.6）
```
npm i sauron-npm@1.0.6
```

引入
```
let _ = require('sauron-npm')
// console.log('_', _)    
// getDecimalLength, // 获取小数点长度
// addition, // 加
// subtraction, // 减
// multiplication, // 乘
// division, // 除
// intercept // 保留几位小数

```

调用
```
// 加法 参考RORO模式
const addres = _.addition({x: 0.1, y: 0.2})
console.log(addres) // 0.3

// 保留n位小数
const addRes = _.addition({x: 0.1222, y: 0.2})
const addInterceptRes = _.intercept({resources: addRes, digits: 2})
console.log(addInterceptRes) // 0.32
```