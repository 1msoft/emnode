'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
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
