var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(8081, function () {
    console.log('Simple Web Application running on port 8081!');
});