var express = require('express');
var app = express();
var os = require('os');
var hostName = os.hostname();
var port = 8084; 
app.get('/', function (req, res) {
	    var response = 'Hello World response from server: ' + hostName + ' and port :' + port;
	    res.send(response);
});


 
app.get('/dia', function(req, res) {  
      var response = 'Hello1  response from server: ' + hostName + ' and port :' + port; 
          console.log("Got a GET request for DIA");
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

var server = app.listen(port, function () {
      console.log("hostName:", hostName);
      console.log("Example app listening on host %s and port %s", hostName, port);
});
