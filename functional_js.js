//function programming

var animals  = [
	{name:'caty' , categoty:'cat'},
	{name:'doy' , categoty:'cat'},
	{name:'heho' , categoty:'dog'},
	{name:'haw' , categoty:'dog'}
];

var dogies = animals.filter(function(item, index , array){
	return (item.categoty === 'dog');
}).map(function(item ){
	item.name =item.name.toUpperCase();
	return item;
});
console.log(dogies);


var x = 'dsd';
var xx =  new String('HHHHH');
console.log(typeof x);
console.log(x instanceof String);
console.log(xx instanceof Object);

console.log(x.length);

String.prototype.toString = function(){
	console.log(typeof this);
	return this.valueOf();
}

var str_primitive = 'pirmitive value';
console.log(str_primitive.toString());
console.log(typeof str_primitive);