var fs = require("fs");

fs.readFile(process.argv[2], function(err, data) {
    if(!err) {
        var length = data.toString().split("\n").length - 1;
        console.log(length);
    }
});
