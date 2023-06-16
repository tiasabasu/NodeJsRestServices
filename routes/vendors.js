const express = require('express');
const router = express.Router();

// var contants1 = require('../constants1.js');
var vendorData = require('../dao/vendorDAO.js');
 

router.get('/vendorData', (req,res, next) => {
    let postCode = req.query.pincode;
    console.log("PinCode : "  + postCode);
    var vendorInfo ;
    vendorData.getVendorData(postCode).then(function(data){
        res.status(200).header("Access-Control-Allow-Origin", "*").send(data);   
    }).catch((err) => setImmediate(()=>{throw err;}));
    
});

module.exports = router;