// example using Date constructor:
// use apply method to pass array arguments to constructor


var args = [2016,6,15];
var date = new (Function.prototype.bind.apply(Date, [null].concat(args)));
console.log(date);

/*
Using Mozilla library method
*/

if(!Function.prototype.construct){
	Function.prototype.construct = function(argsArray){
		if(!Array.isArray(argsArray)){
			throw new Error('Argument must be an array');
		}
		var _this =  this;
		var nullaryFunc = Function.prototype.bind.apply(
			_this , [null].concat(argsArray));
		return new nullaryFunc;
	}
}

var _date = Date.construct(args);
console.log(_date);
