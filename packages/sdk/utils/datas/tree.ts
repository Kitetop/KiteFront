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
import validators from './validators';
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
  getAllParentNodeList: typeof getAllParentNodeList,
  filterTreeRouter: typeof filterTreeRouter,
  findTreeNode: typeof findTreeNode
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
/**
 * 根据指定的筛选条件，筛选出符合条件的结点数据，并且保持结点的树状层级关系
 * @param {SDKTreeNode[]} treeData
 * @param {(string | number)} query
 * @param {boolean} [strict=true]
 * @param {Partial<SDKTreeOptions>} [options={}]
 * @returns {SDKTreeNode[]}
 */
function filterTreeRouter(treeData: SDKTreeNode[], query: string | number, strict: boolean = true, options: Partial<SDKTreeOptions> = {}): SDKTreeNode[] {
  const tree: SDKTreeNode[] = [];
  for (let i = 0; i < treeData.length; i++) {
    const node = treeData[i];
    const child = !validators.isEmpty(node[options.childText || 'children']) ? filterTreeRouter(node[options.childText || 'children'], query, strict) : [];
    /** 严格模式下要求全等 */
    if (strict && node[options.searchField || 'id'] === query) {
      tree.push(node);
    } else if (!strict && (node[options.searchField || 'id'] as string).indexOf(query.toString()) > -1) {
      tree.push(node);
    } else if (child && child.length) {
      node[options.childText || 'children'] = child;
      tree.push(node);
    }
  }
  return tree;
}

/**
 * 查找指定的树状结点
 * @param {SDKTreeNode[]} treeData
 * @param {(string | number)} query
 * @param {Partial<SDKTreeOptions>} [options={}]
 * @returns {(SDKTreeNode | undefined)}
 */
function findTreeNode(treeData: SDKTreeNode[], query: string | number, options: Partial<SDKTreeOptions> = {}): SDKTreeNode[] {
  let nodes: SDKTreeNode[] = [];
  for (let i = 0; i < treeData.length; i++) {
    const node = treeData[i];
    if (node[options.searchField || 'id'] === query) nodes.push(node);
    if (!validators.isEmpty(node[options.childText || 'children'])) {
      const result = findTreeNode(node[options.childText || 'children'], query);
      if (!validators.isEmpty(result)) nodes = nodes.concat(result);
    }
  }
  return nodes;
}

export default {
  getAllParentNodeList,
  filterTreeRouter,
  findTreeNode
}