var express = require('express');
var app = express();
var os = require('os');
var hostName = os.hostname();
var port = 7999; 
app.get('/', function (req, res) {
	    var response = 'Hello World response from server: ' + hostName + ' and port :' + port;
	    res.send(response);
});


 
 // This responds a GET request for abcd, abxcd, ab123cd, and so on
 app.get('/hello1', function(req, res) {  
      var response = 'Hello1  response from server: ' + hostName + ' and port :' + port; 
          console.log("Got a GET request for hello1");
          res.send(response);
    });

 // This responds a GET request for abcd, abxcd, ab123cd, and so on
 app.get('/hello2', function(req, res) {  
     var response = 'Hello2  response from server: ' + hostName + ' and port :' + port; 
     console.log("Got a GET request for hello2");
     res.send(response);
 });

 var server = app.listen(port, function () {
      console.log("hostName:", hostName);
      console.log("Example app listening on host %s and port %s", hostName, port);
});
