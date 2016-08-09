var fs =  require('fs');
var liner = require('./liner');
var source = fs.createReadStream('./dataFile.dat');
source.pipe(liner);
liner.on('readable', function(){
	var line;
	var _startDate = (new Date()).toString();
	var _endDate  = (new Date(3000,1,1)).toSting();
	var currentDataLine = {
		startDate:_startDate,
		endDate:_endDate
	};
	var dataList =[];
	while(null != (line = liner.read())){
		dataList.push({msisdn:line , 
			informatons:currentDataLine
		});
	}
})