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
 import Application = require("koa");
import RouterType = require("koa-router");
const router:RouterType = require('../config/router');
abstract class BaseController {
  constructor(url: string) {
    router.get(url, ctx => {
      this.execute(ctx);
    })
  }  
  public log(info: string, type = 'Warning'): void {
    console.log(`[Kite GateWay]: ${type} => ${info}`);
  }

  abstract execute(ctx: Application.ParameterizedContext): void | any;
}

export = BaseController;