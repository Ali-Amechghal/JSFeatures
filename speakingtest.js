var l =  console.log;
// l('' instanceof String);

// String.prototype.toString=function(){
// 	console.log(typeof this);
// 	console.log(this instanceof Object);
// 	return this.valueOf();
// }
// var valueOf = String.prototype.valueOf;
// String.prototype.valueOf = function(){
// 	console.log('in valueof');
// 	 return valueOf.call(this);
// }
// var str = '';
// l(str.toString());
// var result = NaN || '';
// l(result);


var num =  Number('123'); //produce number primitive not object
var objnum  =  Object(num);
var bb = Boolean(true);
l(typeof num ,  typeof objnum , objnum instanceof Number  );

//getting number object from string primitive;
function getNumber(str){
	return Object(Number(undefined));
}


l(getNumber('333'));

l(3/-0);


function test(x){
	console.log(x === null);
}

test(undefined);



var instance  = {
	name:'instance',
	func :  function(){
		console.log(this.name);
	}
}

var cun = instance.func.bind(instance);
cun();

console.log(Object.getPrototypeOf({__proto__:null}) === null);
