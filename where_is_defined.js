/*
 * check where a given property  is defined in prototype chain
 *
 * */

function getDefiningObject(obj, propKey){
     obj =  Object(obj);//make sure it an object
     while(obj && ! {}.hasOwnProperty.call(obj, propKey)){
         obj = Object.getPrototypeOf(obj);
         // obj is null if we have reached the end
     }
     return obj;
}

//Test
//

var  master = {name:'Master', isMaster:true};
var  slave  = Object.create(master , {
    name: {value:'salve', writable:true}
    });

if(master === getDefiningObject(slave ,  'isMaster'))
    console.log('OK ;  isMaster in Master Object');
