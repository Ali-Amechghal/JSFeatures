/**
	Private Data in the Environnement constructor using , Crockford pattern
*/
(function(){
    console.log("--------------------- First Test ----------------");
	function Person(name ){
		//public instance variable
		this.name  =  name;
		//private instance variabel (also called private environnement variable)
		var privateAdress = 'Heaven just near to hell';
		//privileged functino , it can access to proto functions and private variables too
		this.priviligedMethod  = function(){
			console.log(this.name + ' adress : '+privateAdress);
			this.sayHelloProto();
		};
		//getter to the private variable , usefull to acces private vars 
		//outside the constructor and inside prototype 
		this.getPrivateAdress =  function(){
			return privateAdress;
		}
	}
	//prototype function , it can access only public vars
	Person.prototype.protoFunction =  function(){
		console.log(this.name);
		console.log(this.getPrivateAdress());
	}
	Person.prototype.sayHelloProto = function(){
		console.log('Hello from proto function');
	}
	//testing it 
	var pers = new Person('Ali');
	pers.priviligedMethod();// Ali adress : Heaven just near to hell.. Hello from proto function
	pers.protoFunction();//Ali ,Heaven just near to hell



}());

/**
	StringBuilder using Crockford pattern
*/
(function(){
	console.log("--------------------- Second Test ----------------");
	function StringBuilder(str){	
		var data =  [];
		(str !== undefined ) ? data.push(str) : null;
		this.add =  function(_str){
			data.push(_str);
		};
		this.toString = function(){
			return data.join('');
		};

	}

	var stringbuilder =  new StringBuilder('Begin');
	stringbuilder.add(' of the world');
	console.log(stringbuilder.toString());
}());