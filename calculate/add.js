// 加 add
// 减 minus
// 乘 multiply
// 除 division

const getDecimalLength = (num) => {
  try{
    return num.toString().split('.')[1].length
  }catch (e){
    return 0
  }
}
