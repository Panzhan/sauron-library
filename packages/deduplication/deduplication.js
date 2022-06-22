/*
 * @Descripttion: 
 * @version: 1.0.2
 * @Author: sauron.pan
 * @Date: 2022-06-21 10:02:36
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 16:03:09
 */
const { repeatingArray } = require('../source')
const { isValuable } = require('../types/index')

// 去除重复数据字段 arr: 数据源，key：需要去除的属性
const dedup = ({arr, key} = {}) => {
  if(!isValuable(arr) || !isValuable(key)) return false
  let obj = {}
  return arr.reduce((prev,cur,idx,arr) => {
    !obj[cur[key]] ? (prev.push(Object.assign(cur, {[key]: cur[key]})) && (obj[cur[key]] = true)) : ''
    return prev
  }, [])
}

module.exports = {
  dedup
}