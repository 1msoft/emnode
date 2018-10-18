// @ts-check
"use strict";

const Service = require('egg').Service;

/**
 * 公告服务
 *
 * @class NoticeService
 * @extends {Service}
 */
class NoticeService extends Service {
  /**
   * 创建公告
   *
   * @param {Object} body 创建内容
   * @returns
   * @memberof NoticeService
   */
  async create(body) {
    const data = Object.assign({ status: 1 }, body);
    return data;
  }
}

module.exports = NoticeService;
