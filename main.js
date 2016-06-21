'use strict';
let koa = require('koa');
let config = require('config');

let router = require('./router');

let app = new koa();

router(app);

app.listen(config.port);
console.log(`Server listen in ${config.port}`);