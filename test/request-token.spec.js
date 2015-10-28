'use strict';

var expect = require('chai').expect,
	mock = require('superagent-mock'),
	request = require('superagent');

var requestToken = require('../src/request-token');

describe('request-token', function() {
	it('should resolve the referrerToken provided by the LMS', function() {
		mock(request, [{
			pattern: requestToken.XSRF_TOKEN_PATH,
			fixtures: function noop() {},
			callback: function() {
				return {
					body: {
						hitcodeSeed: '1234',
						referrerToken: 'foo-bar'
					}
				};
			}
		}]);

		return expect(requestToken.get()).to.eventually.equal('foo-bar');
	});

	it('should reject when there are errors requesting the token', function() {
		mock(request, [{
			pattern: requestToken.XSRF_TOKEN_PATH,
			fixtures: function() {
				var err = new Error('bad things');
				err.code = 500;
				throw err;
			},
			callback: function noop() {}
		}]);

		return expect(requestToken.get()).to.be.rejectedWith('bad things');
	});
});
