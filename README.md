# frau-xsrf-token

[![NPM version][npm-image]][npm-url]
[![Coverage Status][coverage-image]][coverage-url]

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

## Versioning & Releasing

> TL;DR: Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`. Read on for more details...

The [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) is called from the `release.yml` GitHub Action workflow to handle version changes and releasing.

### Version Changes

All version changes should obey [semantic versioning](https://semver.org/) rules:
1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

The next version number will be determined from the commit messages since the previous release. Our semantic-release configuration uses the [Angular convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) when analyzing commits:
* Commits which are prefixed with `fix:` or `perf:` will trigger a `patch` release. Example: `fix: validate input before using`
* Commits which are prefixed with `feat:` will trigger a `minor` release. Example: `feat: add toggle() method`
* To trigger a MAJOR release, include `BREAKING CHANGE:` with a space or two newlines in the footer of the commit message
* Other suggested prefixes which will **NOT** trigger a release: `build:`, `ci:`, `docs:`, `style:`, `refactor:` and `test:`. Example: `docs: adding README for new component`

To revert a change, add the `revert:` prefix to the original commit message. This will cause the reverted change to be omitted from the release notes. Example: `revert: fix: validate input before using`.

### Releases

When a release is triggered, it will:
* Update the version in `package.json`
* Tag the commit
* Create a GitHub release (including release notes)
* Deploy a new package to NPM

### Releasing from Maintenance Branches

Occasionally you'll want to backport a feature or bug fix to an older release. `semantic-release` refers to these as [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches).

Maintenance branch names should be of the form: `+([0-9])?(.{+([0-9]),x}).x`.

Regular expressions are complicated, but this essentially means branch names should look like:
* `1.15.x` for patch releases on top of the `1.15` release (after version `1.16` exists)
* `2.x` for feature releases on top of the `2` release (after version `3` exists)

[npm-url]: https://www.npmjs.org/package/frau-xsrf-token
[npm-image]: https://img.shields.io/npm/v/frau-xsrf-token.svg
[coverage-url]: https://coveralls.io/r/Brightspace/frau-xsrf-token?branch=master
[coverage-image]: https://img.shields.io/coveralls/Brightspace/frau-xsrf-token.svg

[superagent-plugin]: https://github.com/Brightspace/frau-superagent-xsrf-token

[EditorConfig]: http://editorconfig.org/
[ESLint]: http://eslint.org
