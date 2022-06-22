/*
 * @Descripttion: 
 * @version: 1.0.2
 * @Author: sauron.pan
 * @Date: 2022-06-21 09:59:48
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 15:46:03
 */
const { type } = require('./type')
const isValuable = require('./isValuable')

// console.log(type()) 
// console.log(type( ))
// console.log(type(undefined))
// console.log(type(''))
// console.log(type([]))
// console.log(type({}))
// console.log(type(NaN))
// console.log(type(null))
// console.log(type(new Date('2021-01-02')))
// console.log(type(Math))
// console.log(type(new RegExp()))
// console.log(type(BigInt(9007199254740991n)))
// console.log(type(function(){}))
// console.log(type(false))
// console.log(type(new Error))
// console.log(type(Symbol()))
// console.log(type(new Map))
// console.log(type(new Set))
// console.log(type(new WeakMap))
// console.log(type(new WeakSet))
// console.log(type(new Promise(() => {})))
// console.log(type(JSON))

module.exports = {
  type,
  ...isValuable
}

