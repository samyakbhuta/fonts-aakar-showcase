var express = require('express');
var exphbs  = require('express3-handlebars');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.logger());

// [todo] : '/' URL should display usage instruction and other info.

app.set('title', 'Aakar Font Showcase');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Ideally this app is meant to showcase Gujarati Unicode text.
// :text parameter should only respond to Gujarati Unicode text
// But putting such artificial filter doesn't look 'hackable'.
// Avoiding Gujarati Unicode Only check.

app.get('/:text/:fontSize?/:color?/:bgColor?', function(req, res){
  res.render('showcase-page',{ text:req.params.text,
	fontSize : req.params.fontSize+"px",
	color : req.params.color,
	bgColor : req.params.bgColor
  });
});
console.log("Listening on ... ", port);
app.listen(port);