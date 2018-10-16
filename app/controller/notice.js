'use strict';

const Controller = require('egg').Controller;

class NoticeController extends Controller {
  async create(ctx, next) {
		const body = ctx.request.body;
		const data = await ctx.service.notice.create(body);
		ctx.body = {
			message: '新增成功',
			data,
		};
  }

  async update(ctx, next) {
    const query = ctx.query;
    const body = ctx.request.body;
    console.log('update query: ', query);
    console.log('update body:', body);
    ctx.body = {
			message: '更新成功'
		};
  }

  async remove(ctx, next) {
    const query = ctx.query;
    console.log('remove query: ', query);
    ctx.body = {
			message: '删除成功'
		};
  }
}

module.exports = NoticeController;