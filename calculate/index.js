// RORO: 输入输出均为对象

// 获取小数点长度
const getDecimalLength = ({x, y} = {}) => {
  let lx, ly, lmax
  try {
    lx = x.toString().split('.')[1].length
  } catch (error) {
    lx = 0
  }
  try {
    ly = y.toString().split('.')[1].length
  } catch (error) {
    ly = 0
  }
  lmax = Math.max(lx, ly)
  return {
    lx,ly,lmax
  }
}

// 加
const add = ({x, y} = {}) => {
  const { lmax } = getDecimalLength({x, y})
  return (x * Math.pow(10, lmax) + y * Math.pow(10, lmax)) / Math.pow(10, lmax)
}

// 减
const minus = ({x, y} = {}) => {
  const { lmax } = getDecimalLength({x, y})
  return (x * Math.pow(10, lmax) - y * Math.pow(10, lmax)) / Math.pow(10, lmax)
}

// 乘
const multiply = ({x, y} = {}) => {
  const { lx, ly } = getDecimalLength({x, y})
  return x * Math.pow(10, lx) * y * Math.pow(10, ly) / Math.pow(10, lx+ly)
}

// 除
const division = ({x, y} = {}) => {
  const { lmax } = getDecimalLength(x, y)
  return (x * Math.pow(10, lmax)) / (y * Math.pow(10, lmax))
}


const testNums = [5.25, 1.5]
const addRes = add({x: testNums[0], y: testNums[1]}) // 6.75
const minusRes = minus({x: testNums[0], y: testNums[1]}) // 3.75
const multiplyRes = multiply({x: testNums[0], y: testNums[1]}) // 7.875
const divisionRes = division({x: testNums[0], y: testNums[1]}) // 3.5
// console.log(addRes, minusRes, multiplyRes, divisionRes)

const res = Number.isNaN(NaN)
console.log(res)