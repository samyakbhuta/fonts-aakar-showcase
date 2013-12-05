var express = require('express');
var exphbs  = require('express3-handlebars');
var app = express();
app.use(express.logger());

// [todo] : Support for fontsize in URL
// [todo] : Support for color in URL
// [todo] : Support for background-color in URL

app.set('title', 'Aakar Font Showcase');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Ideally this app is meant to showcase Gujarati Unicode text.
// :text parameter should only respond to Gujarati Unicode text
// But putting such artificial filter doesn't look 'hackable'.
// Avoiding Gujarati Unicode Only check.

app.get('/:text', function(req, res){
  res.render('showcase-page',{text:req.params.text});
});

app.listen(3000);