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
interface KiteGateWayRouteConfig {
  path: string; /** 路由地址 */
  action: string; /** 指定此路由使用的功能类 */
  method: string; /** 请求方法类别 */
}
/** 设置网关接受的路由 */
export const routers = [
  { path: "/indexs", action: "IndexController", method: "GET" },
  { path: "/index", action: "IndexController", method: "GET" },
] as KiteGateWayRouteConfig[];
