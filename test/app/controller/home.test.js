'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  before(() => console.log('进来后最开始执行'));

  beforeEach(() => console.log('每一次执行 it 前'));

  it('test', () => console.log('主体'));

  afterEach(() => console.log('每一次执行 it 后'));

  after(() => console.log('离开前执行'));
});

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('GET / type=true', async () => {
    app.mockContext({
      type: true
    });
    await app.httpRequest()
      .get('/')
      .expect(200);
  });

  it('GET / type=false', async () => {
    app.mockContext({
      type: false
    });
    const data = await app.httpRequest().get('/');
    assert(data.body.message === 'hi, node');
    assert(data.status === 200);
  });
});
