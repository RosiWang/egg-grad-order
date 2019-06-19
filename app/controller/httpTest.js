'use strict';

const Controller = require('egg').Controller;

class HttpTest extends Controller {
  async init() {
    const { ctx } = this;
    const data = await ctx.service.httpTest.init();
    ctx.body = data;
  }


  async data() {
    const { ctx } = this;
    const data = [
      {
        name: 'tttt',
        age: 4
      },
      {
        name: 'sss',
        age: 4
      }
    ];
    ctx.body = data;
  }

  async post() {
    this.ctx.body = {
      code: 0,
      masg: 'form submit success'
    }
  }

}

module.exports = HttpTest;
