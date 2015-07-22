var express = require("express");
var fs = require("fs");
var app = express();

app.get("/books", function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if(!err) {
            var json = JSON.parse(data);
            res.json(json);
        }
    });
});

app.listen(process.argv[2]);
