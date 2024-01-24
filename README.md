# frau-xsrf-token

[![NPM version][npm-image]][npm-url]

Simple utility to get an XSRF token in a D2L free range application
([frau](https://www.npmjs.com/browse/keyword/frau)).

It is recommended you do not use this library directly, and instead use a dependent, such as [frau-superagent-xsrf-token][superagent-plugin].

## Install

```sh
npm install frau-xsrf-token --save
```

## Usage

```js
import xsrfToken from 'frau-xsrf-token';

const token = await xsrfToken();
```

### API

---

#### `xsrfToken()` -> `Promise<String>`

Gets the active session's XSRF-Token from various sources for use when making calls. Returns a Promise to a String

## Testing

```bash
npm test
```

## Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.

[npm-url]: https://www.npmjs.org/package/frau-xsrf-token
[npm-image]: https://img.shields.io/npm/v/frau-xsrf-token.svg
