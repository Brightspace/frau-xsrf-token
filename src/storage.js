'use strict';

var STORAGE_KEY = 'XSRF.Token';

var fallback = Object.create(null);

function get (key) {
	if (global.localStorage) {
		try {
			return global.localStorage[key];
		} catch (e) {}
	}

	return fallback[key];
}

function set (key, value) {
	if (global.localStorage) {
		try {
			global.localStorage.setItem(key, value);
			return;
		} catch (e) {}
	}

	fallback[key] = value;
}

module.exports.get = function getWrapper () {
	return get(STORAGE_KEY);
};
module.exports.set = function setWrapper (value) {
	set(STORAGE_KEY, value);
	return value;
};
