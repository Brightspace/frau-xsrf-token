import { getStorage, setStorage } from './storage.js';
import { requestXsrfToken } from './request-token.js';
export { XSRF_TOKEN_PATH } from './request-token.js';

export default async function getXsrfToken() {

	const storageToken = getStorage();
	if (storageToken) return storageToken;

	const token = await requestXsrfToken();
	setStorage(token);
	return token;

}
