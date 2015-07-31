# is-css-combinator [![Build Status](https://travis-ci.org/morishitter/is-css-combinator.svg)](https://travis-ci.org/morishitter/is-css-combinator)

Check if a string is CSS combinator

## Installation

```shell
$ npm install is-css-combinator
```

## Usage

```js
var isCombinator = require('is-css-combinator')

isCombinator('+') // true
isCombinator('>') // true
isCombinator('~') // true
isCombinator('-') // false
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
