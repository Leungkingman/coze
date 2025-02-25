/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/wechat/getOpenId', controller.wechat.getOpenId);
};
