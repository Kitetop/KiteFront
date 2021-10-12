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
