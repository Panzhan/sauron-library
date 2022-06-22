/*
 * @Descripttion: 
 * @version: 1.0.2
 * @Author: sauron.pan
 * @Date: 2022-06-22 11:29:05
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 14:21:43
 */

// 值类型映射关系
const TYPE_MAP = {
  '[object Undefined]': 'Undefined',
  '[object Null]': 'Null',
  '[object String]': 'String',
  '[object Number]': 'Number',
  '[object Boolean]': 'Boolean',
  '[object Array]': 'Array',
  '[object Object]': 'Object',
  '[object Function]': 'Function',
  '[object BigInt]': 'BigInt',
  '[object Date]': 'Date',
  '[object RegExp]': 'RegExp',
  '[object Math]': 'Math',
  '[object Error]': 'Error',
  '[object Symbol]': 'Symbol',
  '[object Map]': 'Map',
  '[object Set]': 'Set',
  '[object WeakMap]': 'WeakMap',
  '[object WeakSet]': 'WeakSet',
  '[object Promise]': 'Promise',
  '[object JSON]': 'JSON'
}

module.exports = {
  TYPE_MAP
}