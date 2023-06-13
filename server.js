const http = require('http');
const cors = require('cors');


const app = require ('./app')
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port =  process.env.PORT ||3000;
const server  = http.createServer(app);

server.listen(port);

console.log('listening on port %s...', server.address().port);














// // load up the express framework and body-parser helper
// const express = require('express');
// const bodyParser = require('body-parser');

// // create an instance of express to serve our end points
// const app = express();

// // we'll load up node's built in file system helper library here
// // (we'll be using this later to serve our JSON files
// // const fs = require('fs');

// var cors = require('cors');
// app.use(cors());


// // configure our express instance with some body-parser settings
// // including handling JSON data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // this is where we'll handle our various routes from
// // const routes = require('./routes/routes.js')(app);

// // finally, launch our server on port 8000.
// // const server = app.listen(8000, () => {
// //   console.log('listening on port %s...', server.address().port);
// // });