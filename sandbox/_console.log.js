exports.log = function(data) {

	const util = require('util');

	console.log(
		'\x1b[32m', '',
		'------------------------', 
		'\n', '\x1b[30m', 

		util.inspect( 
			data,
			false, null, true
		), 
	
		'\n', '\x1b[31m', 
		'------------------------', 
	);
	
}

// -----------
// HOW TO USE:
// -----------

// 1. Connect '_console.log.js' file:
// const console = require('./_console.log');
// 2. Call log() function:
// console.log('hello world');

// --------------
// USEFULL LINKS:
// --------------

// How can I get the full object in Node.js's console.log(), rather than '[Object]'?
// https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object

// How to change node.js's console font color?
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

// --------------------------------
// (c) https://github.com/alex-31g
// --------------------------------
