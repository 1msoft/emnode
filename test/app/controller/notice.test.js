'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/notice.test.js', () => {
  // post
  it('POST /notice', async () => {
    const res = await app.httpRequest()
      .post('/notice').send({ name: 'kang' });
    assert(res.body.data.status === 1);
  });
  it('POST /notice', async () => {
    const res = await app.httpRequest()
      .post('/notice');
    assert(res.body.data.status === 1);
  });

  // put
  it('PUT /notice', async () => {
    const res = await app.httpRequest()
      .put('/notice').query({name: '1111'})
      .send({ name: 'kang' });
  });

  // delete
  it('DELETE /notice', async () => {
    const res = await app.httpRequest()
      .delete('/notice').query({name: '3333'});
  });

  // 还有其余的http请求方式,如设置请求头、cookie等等
  // https://github.com/visionmedia/supertest#getting-started
});