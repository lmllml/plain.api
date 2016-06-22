'use strict';

let dbPool = require('../utils/dbPool');

module.exports = {
	getPet: function (callback) {
		dbPool.getConnection(function (err, connection) {
			connection.query('SELECT * FROM pet', function (err, rows) {
				connection.release();
				callback(err, rows);
			});
		});
	}
}