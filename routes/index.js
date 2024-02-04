const router = require('express').Router();

const baseRouter = require('./base.router');

function routerApi(app) {
  app.use('/api', router);
  router.use('/', baseRouter);
}

module.exports = routerApi;
