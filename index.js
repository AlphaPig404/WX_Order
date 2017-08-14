var express = require('express')
var app = express()
var router = require('./router/router')

app.use(express.static('views'))

app.use('/api',router)

var server = app.listen(3000,function(){
	var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})
