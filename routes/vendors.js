const express = require('express');
const router = express.Router();

// var contants1 = require('../constants1.js');
var vendorData = require('../dao/vendorDAO.js');
 

router.get('/vendorData', (req,res, next) => {
    let pinCode = req.query.pincode;
    console.log("PinCode : "  + pinCode);
    var data = vendorData.getVendorData(pinCode);
    res.status(200).header("Access-Control-Allow-Origin", "*").send(data);
});

module.exports = router;