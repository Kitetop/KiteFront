/**
 * Copyright © 2021 xiesz.fnst. All rights reserved. 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export type Validators = {
  getType: typeof getType,
  isType: typeof isType,
  isNumber: typeof isNumber,
  isEmpty: typeof isEmpty
}
/**
 * 得到传入参数的数据类型
 * @param {unknown} value
 */
function getType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}
/**
 * 判断传递的参数类型是否符合你期待的类型
 * @param {unknown} value => 需要进行判断的数据
 * @param {string} expect => 期待的类型
 * @returns {boolean}
 */
function isType(value: unknown, expect: string) : boolean {
  return getType(value).toLowerCase() === expect;
}

/**
 * 判断该参数是否为数字
 * @param {unknown} value => 需要进行判断的数据
 * @returns {boolean}
 */
function isNumber(value: unknown): boolean {
  return isType(value, 'number');
}

/**
 * 判断该参数是否为空(刻意回避了参数值为 0: number 的情况，当为0时，不认定为空)
 * @param {any} value
 * @returns {boolean}
 */
function isEmpty(value: any): boolean {
  if (['Array', 'Object'].indexOf(getType(value)) > -1) {
    for (const _key in value) return false;
    return true;
  }
  return typeof value === 'undefined' ||
    value === null ||
    value === '' || 
    (typeof value === 'string' && value.trim() === '');
}

export default  {
  getType,
  isType,
  isNumber,
  isEmpty
} 