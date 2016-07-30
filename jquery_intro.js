/**
	micro Jquery , create to show how jquery works 
	@Ali-Amechghal	

*/

function $(selector){
	

	var _this = {};
	_this.selector =  selector;
	_this.element = document.querySelector(_this.selector);

	_this.html = function(){
		return _this.element;
	}
	//set attribut value
	_this.attr =  function(name , vlaue){
		if(!value) return _this.element.getAttribut(name);
		else _this.element.setAttribut(name , value);
		return _this;
	};
	_this.on =  function(event , callback){
		if(typeof event !== 'undefined')
			_this.element['on'+event] =callback;
		return _this;
		 
	};

	return _this;

};

/** $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	How to Use it in your Html page:
	<html>
		 ...
		 <script src="libjquery.js" />
		 <script>
			window.onload = function(){
				$('.mydiv').attr('attr_test', 'new value');
				$('button').on('click', function(event){
					console.log('event was captured ,'+event);
				})
			}
		 </script>
	<.html>

*/