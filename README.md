<!--
 * @Descripttion: 
 * @version: 1.0.2
 * @Author: sauron.pan
 * @Date: 2022-06-16 19:00:35
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-17 16:17:27
-->
# sauron-npm

Npm test

安装
```
npm i klook-demo@1.0.0
```

引入
```
let funcs = require('klook-demo')
console.log('funcs', funcs) //   
// getDecimalLength, // 获取小数点长度
// addition, // 加
// subtraction, // 减
// multiplication, // 乘
// division, // 除
// intercept // 保留几位小数

```

调用
```
// 加法
const addres = _.addition({x: 0.1, y: 0.2})
console.log(addres) // 0.3

// 保留n位小数
const addRes = _.addition({x: 0.1222, y: 0.2})
const addInterceptRes = _.addRes({resources: addRes, digits: 2})
console.log(addres) // 0.32
```