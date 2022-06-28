import { expect } from '@open-wc/testing';
import getXsrfToken from '../src/index.js';
import { setStorage } from '../src/storage.js';
import sinon from 'sinon';

describe('frau-xsrf-token', () => {

	let sandbox, fetchStub;
	beforeEach(() => {
		sandbox = sinon.createSandbox();
		fetchStub = sandbox.stub(window, 'fetch');
	});
	afterEach(() => {
		sandbox.restore();
		localStorage.clear();
	});

	it('should get token locally if available', async() => {
		setStorage('1234');

		const token = await getXsrfToken();
		expect(token).to.equal('1234');
	});

	it('should request token if not available locally, and store it', async() => {
		fetchStub.onCall(0).returns(
			new Response(JSON.stringify({ referrerToken: '5678' }), {
				status: 200,
				headers: { 'Content-type': 'application/json' }
			})
		);

		const token = await getXsrfToken();
		expect(token).to.equal('5678');
	});
});
