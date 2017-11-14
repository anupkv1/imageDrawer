var express = require('express');

var app = express();

var mockData = require('../mockdata/data');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/imageData', function (req, res) {

    return res.status(200).send(mockData['200']);

});

app.listen(3000);
