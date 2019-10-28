
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;
    bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
var routes = require('./api/routes/index'); //importing route
routes(app);


app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});

module.exports = app;














