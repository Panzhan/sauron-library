/*
 * @Descripttion: 
 * @version: 1.0.2
 * @Author: sauron.pan
 * @Date: 2022-06-21 10:05:19
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 18:30:43
 */

const { type } = require('../types/index')

// 递归深拷贝
const clone = (obj) => {
  const t = type(obj)
  let resObj = t === 'Array' ? [] : {}
  for(let item in obj){
    if(obj.hasOwnProperty(item)){
      resObj[item] = typeof obj[item] == 'object' ? clone(obj[item]) : obj[item]
    }
  }
  return resObj
}

module.exports = {
  clone
}