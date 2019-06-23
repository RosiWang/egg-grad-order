'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test',controller.pageTest.test);
  router.get('/test2',controller.pageTest.test2);
  router.get('/user/:id', controller.user.info);
  router.get('/httpinit', controller.httpTest.getHtmlData);
  router.get('/getdata',controller.httpTest.data);
  router.post('/post',controller.httpTest.post);
};
