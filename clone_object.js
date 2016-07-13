function clone(orig){

	var copy  =Object.create(Object.getPrototypeOf(orig));
	Object.getOwnPropertyNames(orig).forEach(function(key){
		var desc = Object.getOwnPropertyDescriptor(orig ,  key );
		Object.defineProperty( copy , key , desc);
	});

	return copy;
};

var orig = {
	name : 'Ali',
	job : 'js programmer'
};

console.log('Original Object : ');
console.log(orig);
var copy = clone(orig);
console.log('Copy Object : ');
console.log(copy);
