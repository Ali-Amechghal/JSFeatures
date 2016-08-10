/**
 * ignore holes while countng array elements
 * */
(function(){

	var arr = ['a', 'b' , ,'c'];
	console.log(arr.length);
	function getCount(arr){
		if(!Array.isArray(arr))
			throw new Error('is not an Array');

		var count = 0;
		arr.forEach(function(item){
			count++
		});
		return count;
	}
	console.log(getCount(arr));
}());
