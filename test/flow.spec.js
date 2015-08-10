'use strict';

var expect = require('chai').expect,
	Promise = require('lie'),
	sinon = require('sinon');

var xsrfToken = require('../');

var requestToken = require('../src/request-token'),
	storage = require ('../src/storage');

describe('frau-xsrf-token', function () {
	beforeEach(function () {
		sinon.stub(requestToken, 'get');
		sinon.stub(storage, 'get');
		sinon.spy(storage, 'set');
	});

	afterEach(function () {
		requestToken.get.restore();
		storage.get.restore();
		storage.set.restore();
	});

	it('should get token locally if available', function () {
		storage.get.returns('1234');

		return expect(xsrfToken()).to.eventually.equal('1234');
	});

	it('should request token if not available locally, and store it', function () {
		storage.get.returns(null);
		requestToken.get.returns(Promise.resolve('5678'));

		return expect(xsrfToken())
			.to.eventually.equal('5678')
			.then(function () {
				expect(storage.set).to.have.been.calledWith('5678');
			});
	});
});
