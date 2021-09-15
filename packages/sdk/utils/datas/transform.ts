
/**
 * 获得深层次对象值得安全方法
 * @param {Array} keys => 对象中得键值
 * @param {object} object => 需要进行取值得对象
 * @returns {Any}
 */
function getValueSafety(keys: (keyof any)[], object: object | any[]): any {
  return keys.reduce((obj, index) => {
    return (obj && obj[index] !== undefined) ? obj[index] : null
  }, object)
}
