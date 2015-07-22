var http = require("http");

http.get(process.argv[2], function(res) {
    var str = "";

    res.on("data", function(data) {
        str += data.toString();
    });

    res.on("end", function() {
        console.log(str.length);
        console.log(str);
    });
});
