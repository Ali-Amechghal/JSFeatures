/**
	Some issue with javascript semicolon that will lead to errors
	@Author : Ali-Amechghal

*/


//Javascript insert the ";" after line brek or close {} or end of file
//the case bellow show why you should always put {} in the same line as return

(function(){

	function badTest(){
		//Bad return 
		return  //this will return undefiend  return will become return;{}
		{
			name:"my name"
		}
	}

	function goodTest(){
		//good return, always put "{}" in the same line as return 
		return{
			name:"my name"
		}
	}
	console.log(badTest()); //undefined
	console.log(goodTest());  //{ name: 'my name' }
}());

//always use semicolon after function call, javascript doesn't insert it for function call
(function(){
	function test(){
		return {};
	}
	
	// getting error here no forEach function , `wihout the semicolon , the code will be interpredted like this
	// (test()['A','B']).forEach => {}.forEach()
	//Javascript dont insert ";" after function call !!
	test()//without;
	['A','B'].forEach(function(item){ 

		console.log(item);
	})
}());

