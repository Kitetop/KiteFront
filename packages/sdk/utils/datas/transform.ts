export type Transform = {
  getValueSafety: typeof getValueSafety,
  blobToJSON: typeof blobToJSON
}
/**
 * 获得深层次对象值得安全方法
 * @param {Array} keys => 对象中得键值
 * @param {object} object => 需要进行取值得对象
 * @returns {Any}
 */
function getValueSafety(keys: any[], object: object | object[]): any {
  return keys.reduce((obj, index) => {
    return (obj && obj[index] !== undefined) ? obj[index] : null
  }, object)
}
/**
 * 尝试将Blob数据类型的内容转换成JSON数据格式,若是无法转换成功，则直接返回此值
 * @param {Blob} value
 * @returns {Promise<object>}
 */
function blobToJSON(value: Blob): Promise<object> {
  const reader = new FileReader();
  reader.readAsText(value);
  return new Promise(resolve => {
    reader.onload = (result) => {
      try {
        resolve(JSON.parse(getValueSafety(['target', 'result'], result)));
      } catch (e) {
        resolve(value);
      }
    }
  })
}

export default {
  getValueSafety,
  blobToJSON
}