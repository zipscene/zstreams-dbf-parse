var Transform = require('zstreams').Transform;
var inherits = require('util').inherits;
var dbfparser = require('dbfparser');

function DBFParse(strict, opt) {
	Transform.call(this, {
		readableObjectMode: true,
		writableObjectMode: false
	});
	var dbfParser = this.dbfParser = new dbfparser();
	var self = this;

	dbfParser.on('header', function(header) {
		self.push(header);
	});

	dbfParser.on('record', function(record) {
		self.push(record);
	});
}
inherits(DBFParse, Transform);

DBFParse.prototype._transform = function(data, encoding, cb) {
	this.dbfParser.write(data, encoding, cb);
};

module.exports = DBFParse;