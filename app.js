var express = require('express');
var app = express();
var requestify = require('requestify');



app.get('/kimonolabs', function(req, res){
  requestify.get('https://www.kimonolabs.com/api/9g57gd1i?apikey=nPYNaTq2b8Q9HVz5Wwvu1HqWTDPlvVSL').then(function(response) {
      res.send(response.getBody());
  });


});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
