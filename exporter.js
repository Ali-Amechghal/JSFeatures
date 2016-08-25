
module.exports	=function (name,root , factory){
     // AMD Module
     console.log('exprt function');
	if(typeof define === 'function' && define.amd){
		define(function(){
			if(typeof factory === 'function')
				return root[name] = factory();	
			else
				return root[name] = factory;
		});
	}else if(typeof exports === 'object'){
		//NodeJS
		if(typeof factory === 'function')
			return module.exports  = factory();	
		else
			return module.exports  = factory;

	}else{   
		// Browsers
		if(typeof factory === 'function')
			return root[name] = factory();	
		else
			return root[name] = factory;
	}


};