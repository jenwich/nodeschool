var fs = require("fs");

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        if(!err) {
            var arr = [];
            for(var i in list) {
                if(list[i].split('.')[1] == ext)
                    arr.push(list[i]);
            }
            callback(err, arr);
        } else {
            callback(err);
        }
    });
};
