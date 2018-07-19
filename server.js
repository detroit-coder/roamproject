var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));


app.get('/api/twitter*', function(req, res){
    var baseUrl = 'https://api.twitter.com/1.1';
    var url = `${baseUrl}${req.url.replace('/api/twitter', '')}`;
    console.log('hello', url);
    req.pipe(request(url)).pipe(res);
});

app.get('/api/seatgeek*', function(req, res){
    var baseUrl = 'http://api.seatgeek.com/2/events';
    var url = `${baseUrl}${req.url.replace('/api/seatgeek', '')}`;
  
    req.pipe(request(url)).pipe(res);
});


app.listen(8080, function(){
    console.log('listening on port 8080');
});