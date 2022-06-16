const getDecimalLength = ({ x, y } = {}) => {
  let lx, ly, lmax
  try {
    lx = x.toString().split('.')[1].length
  } catch {
    lx = 0
  }
  try {
    ly = y.toString().split('.')[1].length
  } catch {
    ly = 0
  }
  lmax = Math.max(lx, ly)
  return {
    lx, ly, lmax
  }
}

module.exports = {
  getDecimalLength
}