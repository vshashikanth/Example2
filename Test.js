var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var logger = function(req,res,next) {
    console.log('Logging...');
    next();
}
app.use(logger);

app.listen(3000,function () {
    console.log('server started on port 3000...');
})

app.get('/',function (req,res) {
    res.send('Hello World!');
})
