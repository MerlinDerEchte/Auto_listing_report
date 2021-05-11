## General

I decided to use a local Database mock - a SQlite Database that is only executed when the server starts.
Another solution would have been to use docker to ship a database together with this project, but since im not (yet) familiar 
with it i decided to do it this way.
No code generator has been used. 
## Install this project
In order to run this project...
###  clone the repository: 
git clone https://github.com/MerlinDerEchte/Autoscout24_listing_report.git

### make sure node and npm are installed ( I used Node v15.0.1 and npm 7.12.0)
node -v <br>
npm -v 

### navigate to AutoScout_24_listings_report
cd AutoScout_24_listings_report

### install dependencies
npm install

## Test the project
npm test

## Run the project
npm start <br>
The application should now run on localhost:8000
