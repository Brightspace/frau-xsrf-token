# frau-xsrf-token

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependency Status][dependencies-image]][dependencies-url]

Simple utility to get an xsrf token in a D2L free range application
([frau](https://www.npmjs.com/browse/keyword/frau)).

It is recommended you do not use this library directly, and instead use a
dependent, such as [frau-superagent-xsrf-token][superagent-plugin]

## Install
```sh
npm install frau-xsrf-token --save
```

## Usage
```js
var xsrfToken = require('frau-xsrf-token');

xsrfToken()
	.then(function (token) {
		// do a thing with the token
	});

```

### API

---

#### `xsrfToken()` -> `Promise<String>`

Gets the active session's XSRF-Token from various sources for use when making
calls. Returns a Promise to a String


## Testing

```bash
npm test
```


## Contributing

1. **Fork** the repository. Committing directly against this repository is
   highly discouraged.

2. Make your modifications in a branch, updating and writing new unit tests
   as necessary in the `spec` directory.

3. Ensure that all tests pass with `npm test`

4. `rebase` your changes against master. *Do not merge*.

5. Submit a pull request to this repository. Wait for tests to run and someone
   to chime in.

### Code Style

This repository is configured with [EditorConfig][EditorConfig] and
[ESLint][ESLint] rules.


[npm-url]: https://www.npmjs.org/package/frau-xsrf-token
[npm-image]: https://img.shields.io/npm/v/frau-xsrf-token.svg
[ci-url]: https://travis-ci.org/Brightspace/frau-xsrf-token
[ci-image]: https://img.shields.io/travis/Brightspace/frau-xsrf-token.svg
[coverage-url]: https://coveralls.io/r/Brightspace/frau-xsrf-token?branch=master
[coverage-image]: https://img.shields.io/coveralls/Brightspace/frau-xsrf-token.svg
[dependencies-url]: https://david-dm.org/Brightspace/frau-xsrf-token
[dependencies-image]: https://img.shields.io/david/Brightspace/frau-xsrf-token.svg

[superagent-plugin]: https://github.com/Brightspace/frau-superagent-xsrf-token

[EditorConfig]: http://editorconfig.org/
[ESLint]: http://eslint.org
