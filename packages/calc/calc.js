/*
 * @Descripttion: 
 * @version: 1.0.6
 * @Author: sauron.pan
 * @Date: 2022-06-16 18:30:29
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-17 16:47:36
 */


// RORO: 即函数的参数和返回值都为单个对象

// TODO: 判断是否为number类型
// function isNumber(num) { }

// 获取小数点长度
const getDecimalLength = ({ x, y } = {}) => {
  let lx, ly, lmax
  try {
    lx = x.toString().split('.')[1].length
  } catch {
    lx = 0
  }
  try {
    ly = y.toString().split('.')[1].length
  } catch {
    ly = 0
  }
  lmax = Math.max(lx, ly)
  return {
    lx, ly, lmax
  }
}

// 加
const addition = ({ x, y } = {}) => {
  const { lmax } = getDecimalLength({ x, y })
  return (x * Math.pow(10, lmax) + y * Math.pow(10, lmax)) / Math.pow(10, lmax)
}
// 减
const subtraction = ({ x, y } = {}) => {
  const { lmax } = getDecimalLength({ x, y })
  return (x * Math.pow(10, lmax) - y * Math.pow(10, lmax)) / Math.pow(10, lmax)
}
// 乘
const multiplication = ({ x, y }) => {
  const { lx,ly } = getDecimalLength({ x, y })
  return (x * Math.pow(10, lx)) * (y * Math.pow(10, ly)) / Math.pow(10, lx + ly)
}
// 除
const division = ({ x, y } = {}) => {
  const { lmax } = getDecimalLength({ x, y })
  return (x * Math.pow(10, lmax)) / (y * Math.pow(10, lmax))
}

// 保留n位小数
const intercept = ({ resources, digits } = {}) => {
  const { lx } = getDecimalLength({ x: resources })
  if (lx == digits) {
    return resources
  }
  if (lx < digits) {
    for (let i = 0; i < digits - lx; i++) {
      resources += '0'
    }
    return resources
  }
  if (lx > digits) {
    let result = resources + ''
    return result.substring(0, result.length - (lx - digits))
  }
}



module.exports = {
  getDecimalLength, // 获取小数点长度
  addition, // 加
  subtraction, // 减
  multiplication, // 乘
  division, // 除
  intercept // 保留几位小数
}