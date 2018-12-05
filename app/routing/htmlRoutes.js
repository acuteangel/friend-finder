var path = require("path");
var data = require('../data/friends');

exports.homeRoute_GET = function (server) {
    server.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

exports.surveyRoute_GET = function (server) {
    server.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}

