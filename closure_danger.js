/**
	This example illustre how closure can be danger if used without
	and hwo to get ride of this situation
	
	@Ali-Amechghal
*/
(function(){

	function getFuntions(nbr){
		var results=[];
		for(var i =1 ; i <= nbr ; i++){
			results.push(function(){
				return i;
			});
		}

		return results;
	}

	console.log('Closure problem');
	var results = getFuntions(3);
	// we always get the last result ot i ,
	// cause all the functions in results arrays reference to the same i
	console.log(results[1]()); //4 , it should normaly print 2
	console.log(results[2]()); //4 , it should normaly print 3
}());


/**
	We can bypass this problem by wrapping the code that create a function
	inside an IIFE (Immediatly invoked function expression)
*/

(function(){
	function getFuntions(nbr){
		var results=[];
		for(var i =1 ; i <= nbr ; i++){
			(function(){
				var temp = i;
				results.push(function(){
					return temp;
				});
			}());
			
		}

		return results;
	}
	console.log('Test Using IIFE to handle closure problem');
	var results = getFuntions(3);
	// we always get the last result ot i ,
	// cause all the functions in results arrays reference to the same i
	console.log(results[1]()); //4
	console.log(results[2]()); //4
}());