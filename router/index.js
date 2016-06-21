'use strict';

let router = require('koa-router')();
let controllers = require('../controllers');

module.exports = function (app) {
	controllers.forEach(function (controller) {
		router[controller.method.toLowerCase() || 'get'](controller.path, controller.controller);	
	});
	
	app.use(router.routes()).use(router.allowedMethods());
};