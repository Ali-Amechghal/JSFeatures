console.log((function(){
	return (function(){
		return true;
	})
})()());


var arr = [(function(){console.log('func1');}),(function(){console.log('func2');})]
console.log(arr);