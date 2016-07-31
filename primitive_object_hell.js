/**
	This example illustre how javascript work this types
	Note : Javascript create Wrapper for the 3 primitives (boolean , string , number)
	       this object is used to get access to allow primitive type getting access to 
	       wrapper object methods
		   after returning the result , JS garbage collector collect this temporary Object.       

*/
(function(){

	//redifine toString method to trace the current object type
	String.prototype.toString = function(){
		console.log(typeof this); //Objec
		console.log('Instance of String : '+(this instanceof String));
		return this.valueOf();
	}

	var str_primitive = 'pirmitive value';
	console.log(str_primitive.toString());
	console.log(typeof str_primitive);

}());