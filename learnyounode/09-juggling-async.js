var http = require("http");

var arr = ["", "", ""];
var counter = 0;

function httpGet(i) {   //don't use for-loop here
    http.get(process.argv[2+i], function(res) {
        res.on("data", function(data) {
            arr[i] += data.toString();
        });
        res.on("end", function() {
            counter++;
            if(counter == 3) printData();
        });
    });
}

function printData() {
    for(var i = 0; i < 3; ++i) {
        console.log(arr[i]);
    }
}

for(var i = 0; i < 3; ++i) {
    httpGet(i);
}
