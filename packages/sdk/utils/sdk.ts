
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