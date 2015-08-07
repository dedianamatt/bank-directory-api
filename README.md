# bank-directory-api
HTTP API to Federal Reserve Bank Service's EPayments Directory written in Node.js. The directory comes from https://www.frbservices.org/EPaymentsDirectory/fpddir.txt. 
This file should be copied/replaced in this repository 

- Download source and run npm install to install dependencies
- Runs on port 1338

Examples:

Get the name of a bank based on the routing id
curl http://localhost:1338/banks/043305092

TODO:
- Add endpoint for all banks.
- Parse out additional data from text Directory
- Add endpoint for queries.
- Read fpddir.txt file from web instead of downloading it. 