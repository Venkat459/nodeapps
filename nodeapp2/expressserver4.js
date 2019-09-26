const app = require('express')();
const https = require('https');
const fs = require('fs');
const os = require('os');

//GET home route

var port = '7999';
var hostName = os.hostname();
app.get('/', (req, res) => {
    res.send('Hello World from port 3001');
    });

app.get('/', function (req, res) {
	            var response = 'Hello World response from server: ' + hostName + ' and port :' + port;
	            res.send(response);
});


app.get('/nsi', function(req, res) {
	      var response = 'NSI  response from server: ' + hostName + ' and port :' + port;
	          console.log("Got a GET request for NSI");
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

 // we will pass our 'app' to 'https' server
 https.createServer({
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt')
  }, app)
          .listen(port);










 





















