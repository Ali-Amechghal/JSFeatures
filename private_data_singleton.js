/******
	Attaching private data to singleton
	@Author : Ali-Amechghal
*/

(function(){
	var obj =function (){
	     var _this = {
	     	publicMethod : function(){
	     		console.log(':: public method');
	     		privateFunction();
	     	},
	     	publicProp  : 'public property'
	     };
	     function privateFunction(){
	     	console.log('result from private function ');
	     };

	     return _this;

	}();

	obj.publicMethod();
	console.log(obj.publicProp);

}());

/**
	Attaching private data to method
*/
(function(){
	var obj={
		advancedMethod : function(){
			var localName = 'Mynameishidden';
			return function(_str){
				return (_str === 'secretagent') ? localName : 'no name exist';
			};
		}()
	};

	console.log(obj.advancedMethod('secretagent'));
	console.log(obj.advancedMethod('normalman'));
}());