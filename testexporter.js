var exporter = require('./exporter');
console.log(exporter);
var api = {
	sayhello:function(name){
       console.log('hello  : '+name);
	}
}


 exporter('api',this,api);