# zstreams-dbf-parse
### ZStreams simple DBF parser

```javascript
var DBFParse = require('zstreams-dbf-parse');
var zstreams = require('zstreams');

zstreams.fromFile('test.DBF').pipe(new DBFParse()).pipe(process.stdout);


```

It's a streaming DBF parser. 'Nuff said.
