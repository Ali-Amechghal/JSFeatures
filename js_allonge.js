console.log((function(){
	return (function(){
		return true;
	})
})()());


var arr = [(function(){console.log('func1');}),(function(){console.log('func2');})]
console.log(arr);

//Combinators
function compose(a , b){
	return function(c){
		return a(b(c));
	}
}
function addOne(num){
	return num+1;
}
function doubleOf(num){
	return num * 2;
}

var doubleOfAddOne = compose(doubleOf,addOne);
console.log(doubleOfAddOne(2));//6
