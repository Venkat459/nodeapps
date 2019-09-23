
var firstName ="Venkata";

console.log("hello,",  firstName);

var http = require('http');
var fs  = require('fs');

http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'text/plain'} );
  res.end('Hello world from app1 from port 9001');
     
}).listen(9001 );
