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
import KiteConfigOptions = require('./config');


const config = require('./config');
const Router = require('@koa/router');

const Koa = require('koa');
const app: Application = new Koa();
/** 导入Koa.js的路由模块 */
const router: RouterType = new Router();

app.use( ctx => {
  ctx.body = 'hello koa== !';
});
import IndexController = require('./controllers/IndexController')
const contr = new IndexController();
contr.log('就是喜欢试试吖！！！！')
app.listen(config.port, () => {
  console.log(`server is running at http://localhost:${config.port}`);
});