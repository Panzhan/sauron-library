/*
 * @Descripttion: 
 * @version: 2.0.0
 * @Author: sauron.pan
 * @Date: 2022-06-16 18:30:29
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 13:41:32
 */


// RORO: 即函数的参数和返回值都为单个对象

// TODO: 判断是否为number类型
// function isNumber(num) { }

// 处理小数数据
const handlingDecimals = (x = 0, y = 0) => {
  let lx, // x 小数点长度
      ly, // y 小数点长度
      lMax, // 最长小数点长度
      strx, // x 字符串
      stry, // y 字符串
      intx, // x 去除小数点后的整数值
      inty, // y 去除小数点后的整数值
      divx, // x 转化为整数时扩大的倍数
      divy, // y 转化为整数时扩大的倍数
      divMax, // 最大转化为整数时扩大的倍数
      divSum, // 乘法时总共扩大的倍数
      divGap // 除法时两数相差倍数 要注意这里是计算 l =  l被除数 - l除数
  try {
    strx = x.toString()
    lx = strx.split('.')[1].length
  } catch {
    strx = 0
    lx = 0
  }
  try {
    stry = y.toString()
    ly = stry.split('.')[1].length
  } catch {
    stringy = 0
    ly = 0
  }
  lMax = Math.max(lx, ly)
  intx = Number(strx.replace('.', ''))
  inty = Number(stry.replace('.', ''))
  divx = Math.pow(10, lx)
  divy = Math.pow(10, ly)
  divMax = Math.pow(10, lMax)
  divSum = Math.pow(10, lx+ly)
  divGap = Math.pow(10, ly - lx)

  return {
    lx, ly, lMax, divx, divy, divMax, divSum, divGap, strx, stry, intx, inty
  }
}

// 乘 (小数转化为整数)
const multiply = (x = 0, y = 0) => {
  const { intx, inty, divSum } = handlingDecimals(x, y)
  return intx * inty / divSum
}

// 加
const addition = (x = 0, y = 0) => {
  const { divx, divy, divMax } = handlingDecimals(x, y)
  return (multiply(x, divx) + multiply(y, divy)) / divMax
}

// 减
const subtraction = (x = 0, y = 0) => {
  const { divx, divy, divMax } = handlingDecimals(x, y)
  return (multiply(x, divx) - multiply(y, divy)) / divMax
}

// 除
const division = (x = 0, y = 0) => {
  const { intx, inty, divGap } = handlingDecimals(x, y)
  return multiply(intx/inty, divGap)
}

module.exports = {
  handlingDecimals, // 获取小数点长度
  addition, // 加
  subtraction, // 减
  multiply, // 乘
  division, // 除
}