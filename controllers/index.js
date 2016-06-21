'use strict';

let controllers = module.exports = fs.readdirSync('./').map(function (file) {
	return require(file);
});

