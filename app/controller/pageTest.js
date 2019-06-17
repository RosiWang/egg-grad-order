'use strict';

const Controller = require('egg').Controller;

class TestPage extends Controller {
  async test() {
    const { ctx } = this;
    ctx.body = 'hi, rosi egg page test';
  }
  async test2(){
      const { ctx } = this;
      ctx.body = 'test222';
  }
}

module.exports = TestPage;
