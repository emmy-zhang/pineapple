var express         = require('express'),
    exphbs          = require('express-handlebars'),
    path            = require('path'),
    app             = express(),
    port            = Number(process.env.PORT || 3100);

app.use('/static', express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/coding', function (req, res) {
    res.render('coding');
});

app.get('/art', function (req, res) {
    res.render('art');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});


console.log('Listening on port ' + port);
app.listen(port);
