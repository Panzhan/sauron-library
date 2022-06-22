/*
 * @Descripttion: 
 * @version: 1.0.2
 * @Author: sauron.pan
 * @Date: 2022-06-22 13:42:53
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 14:21:08
 */
const { type } = require('./type')

// 判断值是否有效 非undefined, 非null, 非'', 非[], 非{}, 非NaN
const isValuable = (value) => {
  const t = type(value)
  if(isNaN(value)) return false
  if(['Undefined', 'Null'].includes(t)) return false
  if(['String', 'Array'].includes(t) && !value.length) return false
  if(t === 'Object' && !Object.keys(value).length) return false
  return true
}

// 判断值是否为0
const isZero = (value) => {
  const t = type(value)
  if(t === 'Number' && value == 0) return true
  return false
}

// 判断值是否为false
const isFalse = (value) => {
  const t = type(value)
  if(t === 'Boolean' && value == false) return true
  return false
}

module.exports = {
  isValuable,
  isZero,
  isFalse
}