var express = require("express");
var apiroutes = require('./app/routing/apiRoutes');
var htmlroutes = require('./app/routing/htmlRoutes');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


function setRoutes(server) {
    htmlroutes.homeRoute_GET(server);
    htmlroutes.surveyRoute_GET(server);
    apiroutes.dataApiRoute_GET(server);
    apiroutes.dataApiRoute_POST(server);
}

setRoutes(app)

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
