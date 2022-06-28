const STORAGE_KEY = 'XSRF.Token';

let fallback = null;

function getHelper(key) {
	if (localStorage) {
		try {
			return localStorage.getItem(key);
		} catch (e) { /* do nothing */ }
	}

	return fallback;
}

function setHelper(key, value) {
	if (localStorage) {
		try {
			localStorage.setItem(key, value);
			return;
		} catch (e) { /* do nothing */ }
	}

	fallback = value;
}

export function getStorage() {
	return getHelper(STORAGE_KEY);
}

export function setStorage(value) {
	setHelper(STORAGE_KEY, value);
	return value;
}

export function _resetFallback() {
	fallback = null;
}
