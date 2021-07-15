# isomorphic-language

[![NPM version](https://img.shields.io/npm/v/isomorphic-language.svg?style=flat-square)](https://www.npmjs.com/package/isomorphic-language)
[![NPM Downloads](https://img.shields.io/npm/dm/isomorphic-language.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/isomorphic-language)

Get the local language isomorphically.

## Usage
```javascript
const getLanguage = require('isomorphic-language');
 
const localLanguage = getLanguage()
```

## Explanation

### Node
Thank [`os-locale`](https://github.com/sindresorhus/os-locale)

### Browser

```
navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage;
```

