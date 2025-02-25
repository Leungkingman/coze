const { Controller } = require('egg');

class WechatController extends Controller {
  async getOpenId() {
    const { ctx } = this;
    const req = ctx.request.body
    const { code } = req
    if (!code) {
      return ctx.body = { code: -1000, message: 'empty code' }
    }
    const apiUrl = 'https://api.weixin.qq.com/sns/jscode2session'
    const params = {
      appid: 'wxb447f51ebc0129f7',
      secret: 'faf65f99f1cc079d04eb3d009c2448b9',
      js_code: code
    }
    const result = await ctx.curl(apiUrl, {
      method: 'GET',
      data: params,
      dataType: 'json'
    })
    return ctx.body = { code: 0, data: result }
  }
}

module.exports = WechatController;
