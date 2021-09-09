/**
 * 得到传入参数的数据类型
 * @param {unknown} value
 */
export function getType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}