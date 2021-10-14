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
export interface SDKTreeOptions {
  uidText: string,
  childText: string,
  searchField: string | number
}
export interface SDKTreeNode {
  id?: string | number,
  children?: SDKTreeNode[],
  [properties: string]: any
}

export type Tree = {
  getAllParentNodeList: typeof getAllParentNodeList
} 

/**
 * 获得树形结构数据中拥有子节点的节点(可以使用searchField字段更改检索的结果)
 * @param {tree[]} treeData
 * @param {treeOptions} [options={childText: 'children', searchField: 'id'}]
 * @param {any[]} [result=[]]
 * @returns {any[]}
 */
function getAllParentNodeList(treeData: SDKTreeNode[], options: Partial<SDKTreeOptions> = {}, result: any[] = []): any[] {
  treeData.forEach(value => {
    if (value[options.childText || 'children'] && value[options.childText || 'children'].length > 0) {
      result.push(value[options.searchField || 'id']);
      getAllParentNodeList(value[options.childText || 'children'], options, result);
    }
  })
  return result;
}

export default {
  getAllParentNodeList
}