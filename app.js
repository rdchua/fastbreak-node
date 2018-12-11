var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var YahooFantasy = require('yahoo-fantasy');
var yf = new YahooFantasy(
    'dj0yJmk9WHV5RkZPUklBaE0wJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTc0', 
    '3f7a7defdcd82ee75dcfea328d16c2876e55eb78'
);

app.use(bodyParser.json())

app.post('/login', function(req, res) {
    console.log('hello')
    console.log(req.body)
    // yf.setUserToken(req.body.token);
})

app.get('/games', function(req, res) {
    console.log(req.body)
    yf.games.userFetch(
        ['nba'],
        ['leagues'], // optional 
        function(err, data) {
            if(err) console.log(err)
            else {
                res.json(data);
            }
        });
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});