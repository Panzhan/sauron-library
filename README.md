
# [sauron-library](https://www.npmjs.com/package/sauron-library) node环境使用

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
// getDecimalLength, // 获取小数点长度
// addition, // 加
// subtraction, // 减
// multiplication, // 乘
// division, // 除
// intercept // 保留几位小数

```

### 调用

#### 加法 参考 [RORO模式](https://zhuanlan.zhihu.com/p/34025104)
```
const addres = calc.addition({x: 0.1, y: 0.2})
console.log(addres) // 0.3
```
#### 保留n位小数
```
const addRes = calc.addition({x: 0.1222, y: 0.2})
const addInterceptRes = calc.intercept({resources: addRes, digits: 2})
console.log(addInterceptRes) // 0.32
```

# [sauron-library](https://www.npmjs.com/package/sauron-library) browser环境

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
  const res = Smath.addition({x: 0.1, y:0.2})
  console.log(Smath, res)
</script>
```

### 打包 & 测试
#### 1.打包main.js并输出到bundle.js,终端执行命令:
```
browserify main.js -o bundle.js
```

#### 2.打开浏览器，在控制台查看输出