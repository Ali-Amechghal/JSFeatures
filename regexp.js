(function(){
	//the dot (.) maych any character exept the \r , \n
	//match any character including \n  and \r , use [\s\S]
	var isValide = /[\s\S]/.test('\n');
	console.log(isValide); //true

	//control date
	function parseIsoDate(str_date){
		var match =/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(str_date);
		if(!match)
			throw new Error('Invalide Iso Date');

		console.log('Year : '+match[1]);
		console.log('Month : '+match[2]);
		console.log('Day : '+match[3]);
	}

	parseIsoDate('2016-07-02');
}());