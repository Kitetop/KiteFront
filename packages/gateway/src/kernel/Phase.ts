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
import Router from '@koa/router';
import Koa from 'koa';
import { config, routers } from '@config/index';
import Views from 'koa-views';
import ErrorHandle from './ErrorHandler';

/** Router module */
const _router = new Router();

/** 注册路由阶段: 配置此网关支持的所有路由 */
routers.forEach(async (router) => {
  try {
    const { default: module} = await import(config.path.controllers + router.action);
    new module(_router, router.path, router.method.toLowerCase());
  } catch (e) {
    throw new Error(`[Kite GateWay]: error => ${router.path}: 路由入口配置错误，系统无法加载此模块~~~~`)
  }
});

export function run(app: Koa) {
  /** 捕获系统运行时的异常 */
  ErrorHandle.handleError(app);
  app
    /** 配置系统的views层 */
    .use(Views(config.path.views, { map: { html: 'nunjucks' }}))
    .use(_router.routes())
    .use(_router.allowedMethods());
  app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
  })
}

