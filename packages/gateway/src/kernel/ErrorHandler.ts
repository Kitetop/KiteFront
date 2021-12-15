import Application from "koa";

/**
 * 捕获系统异常
 */
export default class ErrorHandle {
  static handleError(app: Application): void {
    app.use(async (ctx: Application.ParameterizedContext, next: Application.Next) => {
      try {
        await next();
        if (ctx.status === 404) {
          ctx.body = `<script type="text/javascript" 
                src="//volunteer.cdn-go.cn/404/latest/404.js"></script>`
        }
      } catch {
        ctx.body = 'Error!!!'
      }
    })
  }
}