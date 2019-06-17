// import {get, post, openapi, api_0 } from './request'

// function getMyPoints(userToken) {
//     console.log(userToken);
//     return get(openapi + `/credit/account/getTotalPoints`, { 'X-User-Token': userToken })
// }


const Service = require('egg').Service;
class HttpTest extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }

    // 假定这里还有一些复杂的计算，然后返回需要的信息。
    // const picture = await this.getPicture(uid);


  async init() {
    const result = await this.ctx.curl(`http://api-oa.insta360.cn/visitor/getAllMembers`, { dataType: 'json' });
    return result.data;
  }
}
module.exports = HttpTest;



