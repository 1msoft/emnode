// @ts-check
'use strict';

const Controller = require('egg').Controller;

/**
 * 首页控制器
 *
 * @class HomeController
 * @extends {Controller}
 */
class HomeController extends Controller {
  /**
   * index
   *
   * @param {*} ctx 作用域
   * @param {*} next 下一个执行函数
   * @memberof HomeController
   */
  async index(ctx, next) {
    const { type } = ctx;
    if (type) {
      console.log('当前type为：', type);
    } else {
      console.log('当前type为：', type);
    }
    ctx.body = {
      message: 'hi, node',
    };
  }
}

module.exports = HomeController;
