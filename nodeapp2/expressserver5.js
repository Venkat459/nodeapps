const app = require('express')();
const https = require('https');
const fs = require('fs');
const os = require('os');

var port = '8000';
var hostName = os.hostname();

app.get('/', function (req, res) {
	    var response = 'Hello World response from server: ' + hostName + ' and port :' + port;
	    res.send(response);
});


app.get('/con', function(req, res) {  
      var response = 'CON  response from server: ' + hostName + ' and port :' + port; 
          console.log("Got a GET request for con");
          res.send(response);
    });

app.get('/hello1', function(req, res) {  
      var response = 'Hello1  response from server: ' + hostName + ' and port :' + port; 
          console.log("Got a GET request for hello1");
          res.send(response);
    });


app.get('/hello2', function(req, res) {  
     var response = 'Hello2  response from server: ' + hostName + ' and port :' + port; 
     console.log("Got a GET request for hello2");
     res.send(response);
 });

https.createServer({
	       key: fs.readFileSync('./server.key'),
	       cert: fs.readFileSync('./server.crt')
	   }, app)
          .listen(port);
