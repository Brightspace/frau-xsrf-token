export const XSRF_TOKEN_PATH = '/d2l/lp/auth/xsrf-tokens';

export async function requestXsrfToken() {
	const res = await fetch(XSRF_TOKEN_PATH);
	if (!res.ok) {
		throw new Error(res.statusText);
	}
	const val = await res.json();
	return val.referrerToken;
}
