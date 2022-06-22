/*
 * @Descripttion: 
 * @version: 1.0.2
 * @Author: sauron.pan
 * @Date: 2022-06-21 10:01:03
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 14:20:31
 */

const { TYPE_MAP } = require('../map')

// 判断数据原始类型
const type = (param) => {
  const t = Object.prototype.toString.call(param)
  return TYPE_MAP[t]
}

module.exports = {
  type
}