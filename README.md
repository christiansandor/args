[![Build Status](https://travis-ci.org/christiansandor/args.svg?branch=master)](https://travis-ci.org/christiansandor/args)
[![Coverage Status](https://coveralls.io/repos/github/christiansandor/args/badge.svg?branch=master)](https://coveralls.io/github/christiansandor/args?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/sandor-krisztian/projects/cc2b9197-5cdb-47b6-a17f-32642da55040/badge)](https://nodesecurity.io/orgs/sandor-krisztian/projects/cc2b9197-5cdb-47b6-a17f-32642da55040)

# Args
The most minimalistic parameter processor for node. Really.

## Usage
Couldn't be simpler, just install it like:
```
npm install node-args
```

And use it as:
```
var args = require('node-args');
```

 
### You're done.
No other options needed. *If you need more features, use [commander](https://www.npmjs.com/package/commander) or whatever else you fancy.*

### Call node with
- your named parameters prefixed with **--**
- your shorthand parameters prefixed with **-** (with multiple
  parameters in mind like `-ab = -a -b`)
- your parameters and assigned values separated with a
**space** or an **equals** sign

```
node my.js -t -ab=2 -c false -p no some additional data 2 --argsis awesome --another=1
```

So you will get:
```
{
    _: ['node', node file path],
    additional: ['some', 'additional', 'data', 2],
    t: true,
    a: 2,
    b: 2,
    c: false,
    p: 'no',
    argsis: 'awesome',
    another: 1
};
```

Yay.

*Side note: It's build upon TypeScript and tested thoroughly.*

## Build
The source files are in the *src* folder, and the available
scripts are
- `npm run build:src` to build without tests
- `npm run build:tests` to build with tests
- `npm test` to run tests

Please do contribute if you find a better, faster or easier way
to process arguments.
