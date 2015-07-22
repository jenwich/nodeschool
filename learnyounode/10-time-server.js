var net = require("net");

function fillZero(x) {
    return (x > 9)? x: "0" + x;
}

var server = net.createServer(function(socket) {
    var date = new Date();
    data = date.getFullYear() + "-" + fillZero(date.getMonth()+1) + "-" +
        fillZero(date.getDate()) + " " + fillZero(date.getHours()) + ":" +
        fillZero(date.getMinutes()) + "\n";
    socket.write(data);
    socket.end();
}).listen(process.argv[2]);
