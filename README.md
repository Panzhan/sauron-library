
# [sauron-library](https://www.npmjs.com/package/sauron-library) 轻量级，纯净版JS函数库


+ JS浮点数计算全家桶
+ 数组对象去重
+ 深拷贝
+ 防抖截流
+ ...



# node环境使用

### 安装
```
npm i sauron-library
```
### 更新
```
npm i sauron-library@latest
```
### 引入函数，以计算函数为例
```
let calc = require('sauron-library')
// console.log(calc)    
// handlingDecimals, // 获取小数点长度
// addition, // 加
// subtraction, // 减
// multiply, // 乘
// division, // 除

```

# browser环境

### mac环境创建文件夹及相关目录

#### 1.切到根目录下的 Documents
```
cd ~/Documents
```
#### 2.创建一个空文件夹 demo
```
mkdir demo && cd demo
```

#### 3.文件夹 demo 下创建 main.js, bundle.js 和 n.html 三个文件
```
touch main.js && touch bundle.js && touch n.html
```

### 安装依赖
#### 1.下载 [sauron-library](https://www.npmjs.com/package/sauron-npm)
```
npm i sauron-library
```

#### 2.下载 [browserify](https://www.npmjs.com/package/browserify) (node环境不需要)

```
npm i browserify
```
##### 若以上安装方式打包运行时提示
```
zsh: command not found: browserify
```

##### 则建议采用全局安装
```
npm i browserify -g
```

#### 3.文件内容

#### main.js
```
const Smath = require('sauron-library')

window.Smath = Smath
```
#### n.html
```
<html>
  <head>
    <script src="bundle.js"></script>
  </head>
  <body>
    npm html test
  </body>
</html>

<script>
  const Smath = window.Smath

  const resAddition = Smath.addition(0.1, 0.2) // 0.3
  const resSubtraction = Smath.subtraction(0.4, 0.1) // 0.3
  const resMultiply = Smath.multiply(35.41, 100) // 3541
  const resDivision = Smath.division(1.02, 5) // 0.204

  // console.log(0.1 + 0.2) // 0.30000000000000004
  // console.log(0.4 - 0.1) // 0.30000000000000004
  // console.log(35.41 * 100) // 3540.9999999999995
  // console.log(1.02 / 5) // 0.20400000000000001
</script>
```

### 打包 & 测试
#### 1.打包main.js并输出到bundle.js,终端执行命令:
```
browserify main.js -o bundle.js
```

#### 2.打开浏览器，在控制台查看输出