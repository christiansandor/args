# Args
The most minimalistic parameter processor for node.
Really.

## Usage
Couldn't be simpler, just install it like:
> npm install node-args

And use it as:
> var args = require('node-args');

 
###You're done.
No other options needed. *If you need more features, use [commander](https://www.npmjs.com/package/commander) or whatever else you fancy.*

&nbsp;&nbsp;

Call node as you wish,
> node my.js -t -abc -p no some additional data 2 &#45;&#45;paramis nice &#45;&#45;andanother=1

So you will get:
> var args = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;_: ['node', node file path],<br>
&nbsp;&nbsp;&nbsp;&nbsp;additional: ['some', 'additional', 'data', 2],<br>
&nbsp;&nbsp;&nbsp;&nbsp;t: true,<br>
&nbsp;&nbsp;&nbsp;&nbsp;a: true,<br>
&nbsp;&nbsp;&nbsp;&nbsp;b: true,<br>
&nbsp;&nbsp;&nbsp;&nbsp;c: true,<br>
&nbsp;&nbsp;&nbsp;&nbsp;p: 'no',<br>
&nbsp;&nbsp;&nbsp;&nbsp;paramis: 'nice',<br>
&nbsp;&nbsp;&nbsp;&nbsp;andanother: 1<br>
};

Yay.

*Side note: it's only 22 lines uncompressed, and 1 line minified WOW.*
