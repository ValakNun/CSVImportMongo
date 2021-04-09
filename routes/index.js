var express = require('express');
var csv = require("fast-csv");
var router = express.Router();
var fs = require('fs');

var mongoose = require('mongoose');

var Product  = mongoose.model('Products');


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Import CSV using NodeJS' });

}).get('/import', function(req, res, next) {
    var csvfile = __dirname + "/../public/files/products.csv";
    var stream = fs.createReadStream(csvfile);

    var  products  = []
    var csvStream = csv()
        .on("data", function(data){
         
         var item = new Product({
              region: data[0] ,
              country: data[1]   ,
              itemType: data[2],
              salesChannel: data[3]
         });
         
          item.save(function(error){
            console.log(item);
              if(error){
                   throw error;
              }
          }); 

    }).on("end", function(){

    });
  
    stream.pipe(csvStream);
    res.json({success : "Data imported successfully.", status : 200});
     
  }).get('/fetchdata', function(req, res, next) {
    
    Product.find({}, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    })
  
}).get('/cleardata', function(req, res, next) {
    
    Product.deleteMany({}, function(err, docs) {
        if (!err){ 
            res.json({success : "Deleted Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    })
  
});
module.exports = router;
