'use strict';
let petService = require('../services/pet.js');

module.exports = {
	path: '/',
	method: 'GET',
	controller: function * (next) {
		let data = yield petService.getPet;
		console.log(data);

		this.body = 'hello world';
		yield next;
	}
};