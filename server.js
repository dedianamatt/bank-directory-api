var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var express = require('express');
var server = server || {};

/*****************/
var app = express();

app.set('port', (process.env.PORT || 5000))

app.get('/api/banks', function(req, res) {
	console.log("all banks");
	res.send();
});

app.get('/api/banks/:routingId', function(req, res) {
	var inputId = req.params.routingId;
	if (typeof(server.bankDirectory[inputId]) !== 'undefined') {		
		res.json(server.bankDirectory[inputId]);
	}
	else {
		res.status(404).send("Sorry, we can't find a bank with that routing number");
	}
});

app.listen(app.get('port'), function() {
	console.log("listening on port ", app.get('port'));
	server.loadMap();
});

/*server.bankDirectory is a map
key: routingNumber,
value: directoryEntry {
	routingNumber: "this is the routingNumber",
	telegraphicName: "internal bank name",
	customerName: "human readable name for the bank",
	state: "state or territory abbreviation in which bank is located",
	city: "city in which bank is located",
	fundsTransferStatus: "bool: true - Eligible, false - Ineligible",
	fundsSettlementOnlyStatus: "bool: true - Settlement-only; false - not settlement-only",
	bookEntrySecuritiesTransferStatus: "bool: true - eligible; false - ineligible",
	lastRevisedDate: "date of last revision"
} */
server.bankDirectory = {};
server.loadMap = function() {
	fs.readFile('./fpddir.txt', "utf8", function(err, data) {
		if (err) throw err;
		var dataLines = data.split('\n');

		dataLines.forEach(function(bankLine) {
			var routingId = bankLine.substring(0, 9).trim();
			var bankName = bankLine.substring(27, 63).trim();
			if (routingId.length > 0)
				server.bankDirectory[routingId] = {
					routingNumber: routingId,
					telegraphicName: bankLine.substring(9, 27).trim(),
					customerName: bankLine.substring(27, 63).trim(),
					state: bankLine.substring(63, 65).trim(),
					city: bankLine.substring(65, 90).trim(),
					fundsTransferStatus: bankLine.substring(90, 91).trim() === "Y",
					fundsSettlementOnlyStatus: bankLine.substring(91,92).trim() === "S",
					bookEntrySecuritiesTransferStatus: bankLine.substring(92, 93).trim() === "Y",
					lastRevisedDate: bankLine.substring(93, 101).trim()
				};
		});
		console.log("map loaded");		
	});
}

