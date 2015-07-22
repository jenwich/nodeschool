var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    var urlp = url.parse(req.url, true);
    var date = new Date(urlp.query["iso"]);
    if(urlp.pathname == "/api/parsetime")
        res.write("{\"hour\": "+  date.getHours()+", \"minute\": "+
            date.getMinutes() +", \"second\": "+ date.getSeconds() +"}");
    if(urlp.pathname == "/api/unixtime")
        res.write("{\"unixtime\": "+ date.getTime() +"}");
    res.end();
}).listen(process.argv[2]);
