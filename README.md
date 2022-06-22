<!--
 * @Descripttion: 
 * @version: 1.0.7
 * @Author: sauron.pan
 * @Date: 2022-06-16 19:00:35
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 16:32:57
-->
# sauron-library node版本

安装（latest：1.0.11）
```
npm i sauron-library
```

引入函数，以计算为例
```
let _ = require('sauron-library')
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
