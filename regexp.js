(function(){
	//the dot (.) maych any character exept the \r , \n
	//match any character including \n  and \r , use [\s\S]
	var isValide = /[\s\S]/.test('\n');
	console.log(isValide); //true

	
}());