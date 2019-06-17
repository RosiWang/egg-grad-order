'use strict';

const Controller = require('egg').Controller;

class HttpTest extends Controller {
  async init() {
    const { ctx } = this;
    const data = await ctx.service.httpTest.init();
    ctx.body = data;
  }
}

module.exports = HttpTest;
