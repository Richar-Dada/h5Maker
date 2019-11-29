import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async go() {
    const { ctx } = this
    const result =  await ctx.service.test.test()
    ctx.body = { resultCode: -1, data: result }
  }
}
