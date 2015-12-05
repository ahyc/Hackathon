// Load the http module to create an http server. 
var http = require("http"); 
var unirest = require('unirest');

// Configure our HTTP server to respond with Hello World to all requests. 
var server = http.createServer(function(request, response) { 
   response.writeHead(200, {"Content-Type": "text/plain"}); 
   response.end("Hello World"); 
}); 

// Listen on port 8888, IP defaults to localhost 
server.listen(8888); 

// Put a friendly message on the terminal 
console.log("Server running at http://localhost:8888/");


  var humm = require('humm');

  humm.init({
        client_id: '56630710ae8c5042368b4567',
        client_secret: '214d693a9601a3ef8e335a2de2d2e5bf7ae4d92f090a8f538685a5450d489a5f'
  });

unirest.get("https://humm-api.p.mashape.com/artists/55116991f9c816a0d639ea75?auth=")
.header("X-Mashape-Key", "Iwm1620S9ZmshwDtl37iBEdyFh3ap1PPTa0jsnXdc02AZDRy4B")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

unirest.get("https://humm-api.p.mashape.com/artists/55116991f9c816a0d639ea75?auth=")
.header("X-Mashape-Key", "Iwm1620S9ZmshwDtl37iBEdyFh3ap1PPTa0jsnXdc02AZDRy4B")
.header("Accept", "application/json")
.end(function (result) {
  //console.log(result.status, result.headers, result.body);
});

unirest.get("https://humm-api.p.mashape.com/artists/55116991f9c816a0d639ea75/playlists?auth=&limit=20&offset=0")
.header("X-Mashape-Key", "Iwm1620S9ZmshwDtl37iBEdyFh3ap1PPTa0jsnXdc02AZDRy4B")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});