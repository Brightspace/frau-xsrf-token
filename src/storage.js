'use strict';

var STORAGE_KEY = 'XSRF.Token';

function getRepo () {
	if (!global.D2L
		|| !global.D2L.LP
		|| !global.D2L.LP.Web
		|| !global.D2L.LP.Web.UI
		|| !global.D2L.LP.Web.UI.Dom
		|| !global.D2L.LP.Web.UI.Dom.Storage
	) {
		console.log('Couldn\'t get D2L.LP.Web.UI.Dom.Storage.Repo for backup '
					+ 'storage - are you in an iframe with private-mode Safari?');
		return {};
	}

	return global.D2L.LP.Web.UI.Dom.Storage.Repo;
}

function get (key) {
	if (global.localStorage) {
		try {
			return global.localStorage[key];
		} catch (e) {}
	}
	var repo = getRepo();
	return repo[key];
}

function set (key, value) {
	if (global.localStorage) {
		try {
			global.localStorage.setItem(key, value);
			return;
		} catch (e) {}
	}
	var repo = getRepo();
	repo[key] = value;
}

module.exports.get = function getWrapper () {
	return get(STORAGE_KEY);
};
module.exports.set = function setWrapper (value) {
	set(STORAGE_KEY, value);
	return value;
};
