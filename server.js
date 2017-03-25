// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/test2.html", function (request, response) {
  response.sendFile(__dirname + '/public/test2.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/test3.html", function (request, response) {
  response.sendFile(__dirname + '/public/test3.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/test4.html", function (request, response) {
  response.sendFile(__dirname + '/public/test4.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/test5.html", function (request, response) {
  response.sendFile(__dirname + '/public/test5.html');
});

app.get("/test_page.html", function (request, response) {
  response.sendFile(__dirname + '/public/test_page.html');
});

app.get("/test_dyn.html", function (request, response) {
  response.sendFile(__dirname + '/public/test_dyn.html');
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
