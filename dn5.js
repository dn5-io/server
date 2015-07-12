var express = require('express')
var bodyParser = require('body-parser')
var compression = require('compression')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')

var app = express();




app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(process.env.PORT || 3000, '127.0.0.1', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
