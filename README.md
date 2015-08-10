# bank-directory-api
HTTP API to Federal Reserve Bank Service's EPayments Directory written in Node.js. The directory comes from https://www.frbservices.org/EPaymentsDirectory/fpddir.txt. 
This file should be copied/replaced in this repository 

- Download source and run npm install to install dependencies
- Runs on port 5000 or, in heroku, whatever port is assigned

App is deployed to heroku. Example HTTP GET:

curl https://bank-directory-api.herokuapp.com/banks/211672683

Example JSON Response:
{"routingId":"211672683","bankName":"NORTHFIELD SAVINGS BANK"}

TODO:
- Add route for all banks.
- Add HTTP error responses
- Parse out additional data from text Directory
- Add route for searches.
- Add index.html 
- Read fpddir.txt file from web instead of downloading it. 
