/**
	inheritance in JS
	@Author :Ali-Amechghal
*/
(function(){
    
	console.log("---------- First Impelmentation ---------------")

	function Person(name){
		this.name = name;
		console.log('this in superclass ; '+JSON.stringify(this));
	}
	Person.prototype.superMethod = function(){
		console.log('inside super Person method');
		console.log(this);
	}
	Person.prototype.override = function(){
		console.log('inside super override method');
		return 'super class method';
	}
	function Programmer(name , programming_language){
		Person.call(this, name);
		this.programmingLanguage = programming_language;
	}
	Programmer.prototype = Object.create(Person.prototype);
	Programmer.constructor = Programmer;
	Programmer.prototype.subMethod = function(){
		console.log('inside sub Programmer Method');
		console.log(this);
	};

	Programmer.prototype.override =  function(){
		console.log('inside overriden sub method');
		var superOverride = Person.prototype.override.call(this);
		return '--> sub method and '+superOverride;
	}

    var prog =  new Programmer('Ali', 'Javascript');
    prog.superMethod();
    prog.subMethod();
    
    var result = prog.override();
    console.log(result);



}());
/**

  Implementing inheritance and avoid to harcode the super constructor name
*/

(function(){
	console.log("---------- Second Impelmentation ---------------")
	function Person(name){
		this.name =  name;
	}
	Person.prototype.toString = function(){
		return ' name : '+this.name;
	};
	function Programmer (name , programming_language){
		this._super.constructor.call(this , name);
		this.programmingLanguage = programming_language;
	}
	Programmer.prototype._super = Person.prototype;
	Programmer.prototype.toString = function(){
		return this._super.toString.call(this)+' , programming language : '+this.programmingLanguage;

	}
	var prog =  new Programmer('Ali', 'javascript');
	console.log('Programmer : '+prog)
}());


