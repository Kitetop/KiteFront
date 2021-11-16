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
export type Dom = {
  checkEventTargetNodeBelong: typeof checkEventTargetNodeBelong
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

export default {
  checkEventTargetNodeBelong
}
