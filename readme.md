# _ESLint GetRules_

[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm]
<br/>
[![Downloads][npm-downloads-img]][npm] [![Node.js CI](https://github.com/sebastian-software/eslint-get-rules/actions/workflows/node.js.yml/badge.svg)](https://github.com/sebastian-software/eslint-get-rules/actions/workflows/node.js.yml)

_ESLint GetRules_ is a quick wrapper around core ESLint classes to access detailed rule information via API. Unfortunetely such an API is not (yet) available in ESLint itself.

[sponsor]: https://www.sebastian-software.de
[npm]: https://www.npmjs.com/package/eslint-get-rules
[sponsor-img]: https://badgen.net/badge/Sponsored%20by/Sebastian%20Software/c41e54
[npm-downloads-img]: https://badgen.net/npm/dm/eslint-get-rules
[npm-version-img]: https://badgen.net/npm/v/eslint-get-rules

## Installation

### NPM

```console
$ npm install eslint-get-rules
```

### Yarn

```console
$ yarn add eslint-get-rules
```

## Usage

- `getRawRules(options) => Map<string, Rule>`
- `getFixableRules(options) => Set<string>`

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2022<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
