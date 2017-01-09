'use strict'
module.exports = {
	dataTypes: function(data) {
	
		if (typeof(data) === "boolean" ) {
			if (data === true) {
				return true;
			}
			return false;
		}
		else if (typeof(data) === "number") {
			return data < 100 ? "less than 100" : data > 100 ? "more than 100" : "equal to 100";
		}
		else if(typeof(data) === "string"){
			return data.length;
		}
		else if (data instanceof Array) {
			if (data.length>2) {
				return data[2];
			}
			return undefined;
		}
		else if (data instanceof Function) { 
			return "called callback";
		}
		else if(data === null || "undefined"){
			return 'no value';
		}
	}
}