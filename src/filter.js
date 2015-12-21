/*\
title: $:/plugins/tobibeer/random/filter.js
type: application/javascript
module-type: filteroperator

a filter to...

@preserve
\*/

(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
The make filter function...
*/
exports.random = function(source,operator,options) {
	var i,
		results = [],
		// Input titles
		titles = [],
		// Get count
		num = parseInt(operator.operand || "1");
	// Not a number?
	if (isNaN(num)) {
		// Default to one
		num = 1;
	}
	//Loop input titles
	source(function(tiddler,title) {
		// Add to titles
		titles.push(title);
	});
	// Add to results
	while (num && titles.length){
		// Get random
		i = Math.floor(Math.random()*titles.length);
		// Add to results
		results.push(titles[i]);
		// Splice item out of input titles
		titles.splice(i,1);
		// Next title
		num--;
	}
	// Return filter results
	return results;
};

})();