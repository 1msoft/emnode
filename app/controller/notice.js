// @ts-check
'use strict';

const Controller = require('egg').Controller;

/**
 * 公告控制器
 *
 * @class NoticeController
 * @extends {Controller}
 */
class NoticeController extends Controller {
  /**
   * 创建公告
   *
   * @param {*} ctx 作用域
   * @param {*} next 下一个执行函数
   * @memberof NoticeController
   */
  async create(ctx, next) {
		const body = ctx.request.body;
		const data = await ctx.service.notice.create(body);
		ctx.body = {
			message: '新增成功',
			data,
		};
  }
  /**
   * 更新公告
   *
   * @param {*} ctx 作用域
   * @param {*} next 下一个执行函数
   * @memberof NoticeController
   */
  async update(ctx, next) {
    const query = ctx.query;
    const body = ctx.request.body;
    console.log('update query: ', query);
    console.log('update body:', body);
    ctx.body = {
			message: '更新成功'
		};
  }
  /**
   * 删除公告
   *
   * @param {*} ctx 作用域
   * @param {*} next 下一个执行函数
   * @memberof NoticeController
   */
  async remove(ctx, next) {
    const query = ctx.query;
    console.log('remove query: ', query);
    ctx.body = {
			message: '删除成功'
		};
  }
}

module.exports = NoticeController;
