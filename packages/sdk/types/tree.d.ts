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
import { SDKTreeNode, SDKTreeOptions } from "../utils/datas/tree";

declare function getAllParentNodeList(treeData: SDKTreeNode[], options: Partial<SDKTreeOptions>, result: unknown[]): unknown[];

declare function filterTreeRouter(treeData: SDKTreeNode[], query: number | string, strict: boolean, options: Partial<SDKTreeOptions>): SDKTreeNode[];

declare function findTreeNode(treeData: SDKTreeNode[], query: string | number, options: Partial<SDKTreeOptions>): SDKTreeNode[]
