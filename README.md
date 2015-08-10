# bank-directory-api
Simple HTTP API to Federal Reserve Bank Service's EPayments Directory written in Node.js. The directory comes from https://www.frbservices.org/EPaymentsDirectory/fpddir.txt. 
This file should be copied/replaced in this repository 

- Download source and run npm install to install dependencies
- Runs on port 5000 or, in heroku, whatever port is assigned

App is deployed to heroku. Example HTTP GET:

curl https://bank-directory-api.herokuapp.com/api/banks/211672683

Example JSON Response:
{
	"routingNumber":"211672683",
	"telegraphicName":"NORTHFIELD SVGS VT",
	"customerName":"NORTHFIELD SAVINGS BANK",
	"state": "VT",
	"city": "BARRE",
	"fundsTransferStatus": true,
	"fundsSettlementOnlyStatus": false,
	"bookEntrySecuritiesTransferStatus": true,
	"lastRevisedDate": ""
}

TODO:
- Add route for all banks.
- Add request header or query for banks\:routingId route to reduce response size to routingNumber and bankName (customer name)
- Add route for searches.
- Add index.html 
- Read fpddir.txt file from web instead of downloading it. 
