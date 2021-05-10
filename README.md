## General

I decided to use a local Database mock - a SQlite Database that is only executed when the server starts.
Another solution would have been to use docker to ship a database together with this project, but since im not (yet) familiar 
with it i decided to do it this way.
## Install this project
In order to run this project...
###  clone the repository: 
git clone https://github.com/MerlinDerEchte/Autoscout24_listing_report.git

### make sure node and npm are installed ( I used Node v15.0.1 and npm 6.14.10)
node -v <br>
npm -v 

### install dependencies
npm install

## Test the project
npm test

## Run the project
npm start
