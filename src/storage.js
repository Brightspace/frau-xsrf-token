'use strict';

var STORAGE_KEY = 'XSRF.Token';

var fallback = null;

function get(key) {
	if (global.localStorage) {
		try {
			return global.localStorage.getItem(key);
		} catch (e) { /* do nothing */ }
	}

	return fallback;
}

function set(key, value) {
	if (global.localStorage) {
		try {
			global.localStorage.setItem(key, value);
			return;
		} catch (e) { /* do nothing */ }
	}

	fallback = value;
}

module.exports.get = function getWrapper() {
	return get(STORAGE_KEY);
};
module.exports.set = function setWrapper(value) {
	set(STORAGE_KEY, value);
	return value;
};
module.exports._resetFallback = function resetFallback() {
	fallback = null;
};
