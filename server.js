var express = require('express'); //Nodejs server framework
const formidableMiddleware = require('express-formidable'); //to process forms easy
const rateLimit = require("express-rate-limit"); //limit requests per millisec

var app = express();
//var apiV1 = require('./server/api-v1'); 
//var myAddressUpdate = apiV1.myAddressUpdate
//var myaddressRoute = apiV1.getMyAddress

// Express.js uses EventEmitter.
// app.on('event:user_created', callback);
// app.emit('event:user_created', data);

app.use(express.static(__dirname + '/public'));
app.use(formidableMiddleware()); //process form data first with this middleware

//app.post('/api/v1', myAddressUpdate); //setup API code
//app.get('/myaddress', myaddressRoute); //get myaddress

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {console.log('Your app is listening on port ' + listener.address().port)})