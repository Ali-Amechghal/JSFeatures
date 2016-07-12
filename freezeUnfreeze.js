(function(){
    'use strict';
    var freezor = {};
    var freeze = Object.freeze;
    var seal = Object.seal;

    freezor.cache={};
function objectEquals(x, y) {

    if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
    // after this just checking type of one would be enough
    if (x.constructor !== y.constructor) { return false; }
    // if they are functions, they should exactly refer to same one (because of closures)
    if (x instanceof Function) { return x === y; }
    // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
    if (x instanceof RegExp) { return x === y; }
    if (x === y || x.valueOf() === y.valueOf()) { return true; }
    if (Array.isArray(x) && x.length !== y.length) { return false; }

    // if they are dates, they must had equal valueOf
    if (x instanceof Date) { return false; }

    // if they are strictly equal, they both need to be object at least
    if (!(x instanceof Object)) { return false; }
    if (!(y instanceof Object)) { return false; }

    // recursive object equality check
    var p = Object.keys(x);
    return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
        p.every(function (i) { return objectEquals(x[i], y[i]); });
}
Object.unfreeze=function(o){
       var oo=undefined;
        if( o instanceof Array){
                oo=[];var clone=function(v){oo.push(v)};
                o.forEach(clone);
        }else if(o instanceof String){
           oo=new String(o).toString();
      }else  if(typeof o =='object'){

         oo={};
        for (var property in o){oo[property] = o[property];}


        }
        return oo;
 }
    freezor.freeze :  function(_object){
        if(!_object || typeof _object !== 'object')
            throw new TypeError('invalid Object argument');
        return  freeze.call(null, _object);

    };
    freezor.seal:function(_object){
        if(!_object || typeof _object !== 'object')
            throw new TypeError('invalid Object argument');
        return seal.call(null, _object);

    };

    freezor.unfreeze:function(_object){

    };
})();
