'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/notice', controller.notice.create);
  router.put('/notice', controller.notice.update);
  router.delete('/notice', controller.notice.remove);
};
