var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
    var parrots = db.collection("parrots");
    parrots.count({
        age: {
            $gt: process.argv[2]
        }
    }, function(err, count) {
        console.log(count);
        db.close();
    });
});
