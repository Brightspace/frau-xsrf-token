'use strict';

var Promise = require('lie'),
	request = require('superagent');

var XSRF_TOKEN_PATH = '/d2l/lp/auth/xsrf-tokens';

function requestXsrfToken() {
	return new Promise(function(resolve, reject) {
		request
			.get(XSRF_TOKEN_PATH)
			.end(function(err, res) {
				if (err) {
					return reject(err);
				}

				return resolve(res.body.referrerToken);
			});
	});
}

module.exports.get = requestXsrfToken;
module.exports.XSRF_TOKEN_PATH = XSRF_TOKEN_PATH;
