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

import Router from "@koa/router";
import Koa from "koa";

type KiteGateWayHttpMethod = 'head' | 'options'| 'get'| 'put'| 'patch'| 'post'| 'delete';
export default abstract class BaseController {
  constructor(router: Router, url: string, method: KiteGateWayHttpMethod = 'get') {
    try {
      router[method](url, ctx => this.execute(ctx));
    } catch (e) {
      this.log('路由不支持该方法，请检查路由配置~~~~', 'error');
    }
  }

  public log(info: string, type = 'Warning'): void {
    console.log(`[Kite GateWay]: ${type} => ${info}`);
  }

  abstract execute(ctx: Koa.ParameterizedContext): void | any;
}