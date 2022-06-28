import { _resetFallback, getStorage, setStorage } from '../src/storage.js';
import { expect } from '@open-wc/testing';
import sinon from 'sinon';

function defineTests() {

	describe('get', () => {
		it('should return null if unset', () => {
			expect(getStorage()).to.be.null;
		});
		it('should return the set value', () => {
			setStorage('foo');
			expect(getStorage()).to.equal('foo');
		});
	});

	describe('set', () => {
		it('should return the value', () => {
			expect(setStorage('foo')).to.equal('foo');
		});
	});
}

describe('storage', () => {

	let sandbox;
	beforeEach(() => {
		localStorage.clear();
		sandbox = sinon.createSandbox();
	});
	afterEach(() => {
		sandbox.restore();
	});

	defineTests();

	describe('localStorage throws errors', () => {
		before(_resetFallback);
		after(_resetFallback);

		beforeEach(() => {
			sandbox.stub(window.localStorage, 'getItem').throws();
			sandbox.stub(window.localStorage, 'setItem').throws();
		});

		defineTests();
	});

});
