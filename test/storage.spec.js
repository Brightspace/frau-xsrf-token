'use strict';

var expect = require('chai').expect,
	sinon = require('sinon');

var storage = require('../src/storage');

function defineTests() {
	describe('before set', function() {
		describe('get', function() {
			it('should return null', function() {
				expect(storage.get()).to.be.null;
			});
		});
	});

	describe('during set', function() {
		describe('set', function() {
			it('should return the value', function() {
				expect(storage.set('foo')).to.equal('foo');
			});
		});
	});

	describe('after set', function() {
		describe('get', function() {
			it('should return the set value', function() {
				expect(storage.get()).to.equal('foo');
			});
		});
	});
}

describe('storage', function() {
	before(function() {
		if (global.localStorage) {
			return;
		}

		var store = Object.create(null);
		global.localStorage = {
			getItem: function(key) {
				return store[key] || null;
			},
			setItem: function(key, val) {
				store[key] = val;
			}
		};
	});

	defineTests();

	describe('localStorage throws errors', function() {
		before(storage._resetFallback);
		after(storage._resetFallback);

		beforeEach(function() {
			sinon.stub(global.localStorage, 'getItem').throws();
			sinon.stub(global.localStorage, 'setItem').throws();
		});

		afterEach(function() {
			global.localStorage.getItem.restore();
			global.localStorage.setItem.restore();
		});

		defineTests();
	});

	describe('localStorage is not implemented', function() {
		before(storage._resetFallback);
		after(storage._resetFallback);

		var tmp;
		before(function() {
			tmp = global.localStorage;
			global.localStorage = undefined;
		});

		after(function() {
			global.localStorage = tmp;
		});

		defineTests();
	});
});
