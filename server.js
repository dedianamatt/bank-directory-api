var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var express = require('express');
var server = server || {};

/*****************/
var app = express();

app.get('/banks', function(req, res) {
	console.log("all banks");
	res.send();
});

app.get('/banks/:routingId', function(req, res) {
	var inputId = req.params.routingId;
	console.log(inputId);
	if (typeof(server.routingIdMap[inputId]) !== 'undefined') {
		var body = {'routingId':inputId, 'bankName':server.routingIdMap[inputId]};
		res.json(body);
	}
	res.send();
});

app.listen(process.env.PORT || 1338, function() {
	console.log("listening on port "+ process.env.PORT + " or port 1338");
	server.loadMap();
});

server.routingIdMap = {};
server.loadMap = function() {
	fs.readFile('./fpddir.txt', "utf8", function(err, data) {
		if (err) throw err;
		var dataLines = data.split('\n');

		dataLines.forEach(function(bankLine) {
			var routingId = bankLine.substring(0, 9).trim();
			var bankName = bankLine.substring(27, 63).trim();
			if (routingId.length > 0)
				server.routingIdMap[routingId] = bankName;
		});
		console.log("map loaded");
	});
}