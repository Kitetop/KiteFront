### 如何下载此项目
1. `git clone http://git.fnst.cn.fujitsu.com/xiesz.fnst/frontsdk.git`
2. 该项目使用Lerna来对多项目进行管理，如果本地没有安装Lerna，运行如下命令安装Lerna
   > * `cd frontsdk`
   > * `npm i -g lerna`
3. 安装项目依赖
   > `lerna bootstrap --hoist`
4. 运行项目
   > * `cd packages/example `
   > * `npm run serve`
---
### 如何进行SDK开发
> 1. 在项目的 `packages/sdk/utils` 目录书写你提供的功能函数并提供必要的注释
> 2. 在项目的 `packages/sdk/types` 目录书写你提供的功能函数的声明文件
> 3. 在项目的 `packages/example` 目录下书写你的函数的调用以及部分测试用例（期待能够达到API文档的效果）