/**
	This example illustre how javascript work with types
	Note : Javascript create Wrapper object for the 3 primitives (boolean , string , number)
	       this object is used to allow primitive type getting access to 
	       wrapper object methods (length , toUpperCase...)
		   after returning the result , JS garbage collector remove this temporary Object.       

*/
(function(){

	//redifine toString method to trace the current object type
	String.prototype.toString = function(){
		console.log(typeof this); //Object
		console.log('Instance of String : '+(this instanceof String)); //true
		return this.valueOf();
	}

	var str_primitive = 'pirmitive value';
	console.log(str_primitive.toString()); //primitive value
	console.log(typeof str_primitive); //'string' , still primitive

}());