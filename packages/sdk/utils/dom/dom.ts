/**
 * Copyright © 2021 Kitetop All rights reserved. 
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
import Validators from "../datas/validators";
export type Dom = {
  checkEventTargetNodeBelong: typeof checkEventTargetNodeBelong,
  KiteResizeObserver: typeof KiteResizeObserver
}
/**
 * 检查触发事件的DOM元素是否是为指定DOM或者属于DOM
 * @param {Event} event 
 * @param {HEMLElement} root
 * @returns {boolean}
 */
function checkEventTargetNodeBelong(event: Event, root: HTMLElement | null): boolean {
  if (!root) return false;
  let target = event.target as HTMLElement;
  while (target && target.nodeType && (target as unknown as Document) !== document) {
    if (root === target) return true;
    target = target.parentNode as HTMLElement;
  }
  return false;
}
class KiteResizeObserver {
  /** 当监听的元素发生变化时，需要触发的callback */
  private callback: (...args: object[]) => void;

  private observe$: ResizeObserver | MutationObserver;
  /** 使用 MutationObserver 时需要提供的配置项*/
  private options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: false,
    attributeOldValue: true
  };

  constructor(callback: (...args: object[]) => void, options = {}) {
    this.callback = callback;
    !Validators.isEmpty(options) ? (this.options as object)= options : '';
  }

  /**
 * 监听Dom尺寸是否发生过变化
 * @param callback
 * @returns 
 */
  public createResizeEvent(): KiteResizeObserver {
    if (window.ResizeObserver) {
      this.observe$ = new window.ResizeObserver(this.callback);
      return this;
    }
    // eslint-disable-next-line no-console
    console.warn('The browser does not support `ResizeObserver`, try use `MutationObserver` now!');
    if (window.MutationObserver) {
      this.observe$ = new window.MutationObserver(this.callback);
      return this;
    }
    throw new Error('The browser does not support `ResizeObserver` and `MutationObserver`, please provide the polyfill file!');
  }
  /**
   * 开始监听Dom变化
   * @param target
   * @returns 
   */
  public observe(target: HTMLElement) {
    if (this.observe$ instanceof window.ResizeObserver) {
      this.observe$.observe(target);
      return;
    } else {
      this.observe$.observe(target, this.options);
    }
  }

}

export default {
  checkEventTargetNodeBelong,
  KiteResizeObserver
}
