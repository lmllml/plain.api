'use strict';
let fs = require('fs');
let path = require('path');
let config = require('config');


let controllers = module.exports = fs.readdirSync('./controllers/').filter(function (file) {
	return file !== 'index.js';
}).map(function (file) {
	return require('./' + file);
});