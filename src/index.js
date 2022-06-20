'use strict';

var	requestToken = require('./request-token'),
	storage = require('./storage');

module.exports = function getXsrfToken() {
	return Promise
		.resolve()
		.then(storage.get)
		.then(function(token) {
			if (token) {
				return token;
			}

			return requestToken
				.get()
				.then(storage.set);
		});
};
