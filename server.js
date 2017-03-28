var express = require('express');
var generateToken = require('./utils/generateToken');

var merchantData = require('./model/merchantData');

var app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/*', (req, res) => {
  return res.render('index', {token: generateToken(merchantData)});
});


app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
