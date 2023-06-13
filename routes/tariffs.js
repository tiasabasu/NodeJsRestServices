const express = require('express');
const router = express.Router();

// var contants1 = require('../constants1.js');
var calculateTariff = require('../service/calculateTariff.js');
 

router.get('/calculateTariffs', (req,res, next) => {
    
    console.log(req.query);
    let averageMonthlyConsumption = req.query.averageMonthlyConsumption;
    var savings = calculateTariff.getSavings(averageMonthlyConsumption);
    res.status(200).header("Access-Control-Allow-Origin", "*").send(savings);
    
    // ({
        
    //     saving : savings
    // });
});

router.post('/postTariffs', (req,res, next) => {
    res.status(200).json({

        message: 'Hello POST is working'
    });
});

module.exports = router;

