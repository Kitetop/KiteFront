/**
 * 得到传入参数的数据类型
 * @param {unknown} value
 */
export function getType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}
/**
 * 判断传递的参数类型是否符合你期待的类型
 * @param {unknown} value => 需要进行判断的数据
 * @param {string} expect => 期待的类型
 * @returns {boolean}
 */
export function isType(value: unknown, expect: string) : boolean {
  return getType(value).toLowerCase() === expect;
}

/**
 * 判断该参数是否为数字
 * @param {unknown} value => 需要进行判断的数据
 * @returns {boolean}
 */
export function isNumber(value: unknown): boolean {
  return isType(value, 'number');
}