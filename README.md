# bank-directory-api
Simple HTTP API to Federal Reserve Bank Service's EPayments Directory written in Node.js. The directory comes from https://www.frbservices.org/EPaymentsDirectory/fpddir.txt. 
When the Federal Reserve updates this directory, we need to paste it in here. Would love some help accessing it programatically - it's behind a redirect.

- Download source and run npm install to install dependencies
- Server has a few configurations that allow it to run in Heroku, but will use default settings if you want to host it yourself.

App is deployed to heroku. Example HTTP GET, where 211672683 is the routingNumber:

curl https://bank-directory-api.herokuapp.com/api/banks/211672683

You can also download source and node server.js:

curl http://localhost:5000/api/banks/211672683

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

You can also query on specific properties. Currently only "starts with" search is supported. 

curl /api/banks?customerName=North

curl /api/banks?customerName=North&state=VT


TODO:
- Add route for all banks.
- Add some way to filter on specific properties.
- Add index.html 
- Read fpddir.txt file from web instead of downloading it. 
