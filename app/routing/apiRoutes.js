var path = require("path");
var data = require('../data/friends');

exports.dataApiRoute_GET = function (server) {
    server.get("/api/data", function (req, res) {
        return res.json(data.friends);
    });
}

exports.dataApiRoute_POST = function (server) {
    server.post("/api/data", function (req, res) {
        // Push new reservation to data.        
        data.addFriend(req.body);

        // Send back result.
        res.json(true);
    });
}