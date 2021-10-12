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
/**
 * @param {string} name => 功能函数的方法名称
 * @param {Function | object} method => 函数对象
 * @returns {void}
 */
export declare function install(name: string, method: Function | object): void;
/**
 * @param {{[proprty: string]: Function | object}} methods => 功能函数的方法名称
 * @returns {void}
 */
export declare function install(methods: {[proprty: string]: Function | object}): void;
export default class FnstSDK {
   /**
    * 获得函数库的版本信息
    * @returns {string}
    */
   public static version() : string {
      return 'Version: 1.0.0';
   }
   /**
    * 给SDK注册功能函数，可用于自定义扩展
    */
   public static install(name: string | object, method?: Function | object): void {
      if (typeof name === 'string') {
         Object.assign(FnstSDK, {
            [name]: method
         })
      } else {
         Object.assign(FnstSDK, name);
      }
   }
}