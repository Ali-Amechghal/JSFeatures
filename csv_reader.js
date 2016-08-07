var fs = require('fs');

function CsvReader(sepa){
   this.sepa =  sepa || [';'];
   this.regExp =  new RegExp(sepa.map(function(sep){
        return '\\'+sep;
   }));
   this.data = null;
}
CsvReader.prototype.read =  function(data){
   this.data = data.trim().split(/\n/);
   return this.data.map(function(line){
        return line.split(this.regExp);
   },this);

}
fs.readFile('./test.csv',function(err, data){
     if(err)
      return  console.log(err.stack);
  //  console.log(data.toString());
     var csv= new CsvReader([";"]);
     console.log((csv.read(data.toString())).join('\n'));
})
