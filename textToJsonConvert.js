var fs = require('fs');



fs.readFile('./fpddir.txt', "utf8", function(err, data) {
	if (err) throw err;
	var dataLines = data.split('\n');
	var jsonData = {};
	
	dataLines.forEach(function(bankLine) {
		var routingId = bankLine.substring(0, 8).trim();
		var bankName = bankLine.substring(27, 62).trim();
		if (routingId.length > 0)
			jsonData[routingId] = bankName;
	});
	
	fs.writeFile('./fpddir.json', JSON.stringify(jsonData), function(err) {
		if (err) throw err;
		console.log("Saved!");
	})
	
	//console.log(jsonData);
});