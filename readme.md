# _ESLint GetRules_

[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm]
<br/>
[![Downloads][npm-downloads-img]][npm] [![Build Status][github-img]][github]

_Asset Hash_ is a quick wrapper around hashing libraries for efficient and fast hashing of asset files like images, web fonts, etc. By default it uses the cross-platform performance-optimized [XXHash-WASM](https://github.com/jungomi/xxhash-wasm) and a _Base52_ encoding (`[a-zA-Z]`) which works well for file names and urls and has a larger dictionary than when using traditional hex.

[sponsor]: https://www.sebastian-software.de
[npm]: https://www.npmjs.com/package/eslint-get-rules
[github]: https://github.com/sebastian-software/eslint-get-rules/actions
[sponsor-img]: https://badgen.net/badge/Sponsored%20by/Sebastian%20Software/c41e54
[npm-downloads-img]: https://badgen.net/npm/dm/eslint-get-rules
[npm-version-img]: https://badgen.net/npm/v/eslint-get-rules
[github-img]: https://badgen.net/github/status/sebastian-software/eslint-get-rules?label=tests&icon=github

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
