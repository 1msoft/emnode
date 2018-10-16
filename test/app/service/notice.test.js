'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/notice.test.js', () => {
  it('notice -service', async () => {
    const ctx = app.mockContext();
    const body = { a: 1, b: 2 };
    const createInfo = await ctx.service.notice.create(body);
    assert(createInfo.status === 1);
  });
});