import { expect } from '@open-wc/testing';
import { requestXsrfToken } from '../src/request-token.js';
import sinon from 'sinon';

describe('request-token', () => {

	let sandbox, fetchStub;
	beforeEach(() => {
		sandbox = sinon.createSandbox();
		fetchStub = sandbox.stub(window, 'fetch');
	});
	afterEach(() => {
		sandbox.restore();
	});

	it('should resolve the referrerToken provided by the LMS', async() => {
		fetchStub.onCall(0).returns(
			new Response(JSON.stringify({
				hitcodeSeed: '1234',
				referrerToken: 'foo-bar'
			}), {
				status: 200,
				headers: { 'Content-type': 'application/json' }
			})
		);

		const token = await requestXsrfToken();
		expect(token).to.equal('foo-bar');
	});

	it('should reject when there are errors requesting the token', (done) => {
		fetchStub.onCall(0).returns(
			new Response('', { status: 404, statusText: 'bad things' })
		);

		requestXsrfToken()
			.then(() => { throw 'unexpected'; })
			.catch((err) => {
				expect(err.message).to.equal('bad things');
				done();
			});
	});

});
