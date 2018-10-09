"use strict";

const Service = require('egg').Service;

class NoticeService extends Service {
  async create(body) {
    const data = Object.assign({ status: 1 }, body);
    return data;
  }
}

module.exports = NoticeService;