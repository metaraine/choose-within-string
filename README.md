# choose-within-string
[![npm version](https://img.shields.io/npm/v/choose-within-string.svg)](https://npmjs.org/package/choose-within-string)
[![Build Status](https://travis-ci.org/metaraine/choose-within-string.svg?branch=master)](https://travis-ci.org/metaraine/choose-within-string)

Choose among several values separated by slashes within a string.

## Install

```sh
$ npm install --save choose-within-string
```

## Usage

```js
var chooseWithinString = require('choose-within-string')

chooseWithinString('You just won $1/1,000/1,000,000! Now you are poor/happy/rich!', 2)
// "You just won $1,000,000! Now you are rich!"
```

## License

ISC © Raine Lourie
