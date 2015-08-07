'use strict';

var Promise = require('lie'),
	request = require('superagent');

module.exports = function requestXsrfToken () {
	return new Promise(function (resolve, reject) {
		request
			.post('/d2l/lp/auth/xsrf-tokens')
			.end(function (err, res) {
				if (err) {
					return reject(err);
				}

				return resolve(res.body.referrerToken);
			});
	});
};
