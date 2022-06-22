/*
 * @Descripttion:
 * @version: 1.0.2
 * @Author: sauron.pan
 * @Date: 2022-06-22 11:29:17
 * @LastEditors: sauron.pan
 * @LastEditTime: 2022-06-22 18:24:25
 */
const repeatingArray = [
	{ id: 1, name: "aa" },
	{ id: 2, name: "bb" },
	{ id: 3, name: "aa" },
  { id: 3, name: "dd" },
  { id: 3, name: "ee" },
];

const referenceObject = {
  info: {
    id: 1,
    name: 'sauron',
    age: 18,
    city: {
      country: 'china'
    },
    work: null,
    status: function(){
      console.log('busy')
    }
  },
  phone: undefined,
  sport: {
    ball: ['pingpang', 'basketball'],
    swimming: false,
    others: []
  },
}

module.exports = {
  repeatingArray,
  referenceObject
}