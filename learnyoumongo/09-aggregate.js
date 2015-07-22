var mongo = require("mongodb").MongoClient;
var size = process.argv[2];

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
    var prices = db.collection("prices");
    prices.aggregate([{
        $match: {
            size: size
        }
    }, {
        $group: {
            _id: "total",
            total: {
                $avg: "$price"
            }
        }
    }]).toArray(function(err, results) {
        console.log(results[0].total.toFixed(2));
        db.close();
    });
});
