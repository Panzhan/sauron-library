/*
 * @Descripttion: 
 * @version: 1.0.6
 * @Author: sauron.pan
 * @Date: 2022-06-16 18:30:13
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 14:28:14
 */

const calc = require('./packages/calc/index')
const types = require('./packages/types/index')

module.exports = {
  ...calc,
  ...types
}