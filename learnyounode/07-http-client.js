var http = require("http");

http.get(process.argv[2], function(res) {
    res.on("data", function(data) {
        var str = data.toString();
        console.log(str);
    });
});
