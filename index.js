var fs    = require('fs'),
	parse = require('jsonml').parse;

var jsonML = parse(fs.readFileSync('index.svg'))


console.log(jsonML);
