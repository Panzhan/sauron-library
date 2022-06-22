/*
 * @Descripttion: 
 * @version: 1.0.6
 * @Author: sauron.pan
 * @Date: 2022-06-16 18:30:13
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 16:05:30
 */

const calc = require('./packages/calc/index')
const types = require('./packages/types/index')
const dedup = require('./packages/deduplication/index')

module.exports = {
  ...calc,
  ...types,
  ...dedup
}