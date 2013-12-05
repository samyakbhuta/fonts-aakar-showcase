var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('આકાર');
});

app.listen(3000);