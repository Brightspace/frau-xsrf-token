'use strict';

var Promise = require('lie');

var	requestToken = require('./request-token'),
	storage = require('./storage');

module.exports = function getXsrfToken () {
	return Promise
		.resolve()
		.then(storage.get)
		.then(function (token) {
			if (token) {
				return token;
			}

			return requestToken()
				.then(storage.set);
		});
};
