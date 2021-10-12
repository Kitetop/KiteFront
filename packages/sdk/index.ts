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
import FnstSDK, { install } from './utils/sdk';
import validators, { Validators } from './utils/datas/validators';
import transform, { Transform } from './utils/datas/transform';
import tree, { Tree } from './utils/datas/tree';
import dom, { Dom } from './utils/dom/dom';

export type SDK = {install: typeof install}
  & Validators
  & Transform
  & Dom
  & Tree
;
FnstSDK.install({
  /** validators.ts */
  ...validators,
  /** transform.ts */
  ...transform,
  /** tree.ts */
  ...tree,
  /** dom.ts */
  ...dom
});

export default FnstSDK as unknown as SDK; 
