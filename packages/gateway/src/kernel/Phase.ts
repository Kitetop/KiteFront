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
import path from 'path';
import Router from '@koa/router';
import Koa from 'koa';
/** 配置模块 */
import { KiteGateWayRouteConfig, routers } from "../config/router";
import config from '../config';

/** Router module */
const _router = new Router();

/** 网关初始化阶段： 注册全局变量 */
process.env.Controllers = path.join(__dirname, '../controllers/');
process.env.Services = path.join(__dirname, '../Services/');

/** 注册路由阶段: 配置此网关支持的所有路由 */
(routers as KiteGateWayRouteConfig[]).forEach(async (router) => {
  try {
    const { default: module} = await import(process.env.Controllers + router.action);
    new module(_router, router.path, router.method.toLowerCase());
  } catch (e) {
    throw new Error(`[Kite GateWay]: error => ${router.path}: 路由入口配置错误，系统无法加载此模块~~~~`)
  }
});

export function run(app: Koa) {
  app
    .use(_router.routes())
    .use(_router.allowedMethods());
  app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
  })
}

