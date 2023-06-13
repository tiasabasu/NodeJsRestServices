const express= require('express');
const app = express();





// const CONSTANTS = require('constants1.js');
const tariffRoutes = require('./routes/tariffs');
const vendorRoutes = require('./routes/vendors');
const calculateTariffs = require('./service/calculateTariff.js');
const vendorDAO = require ('./dao/vendorDAO.js');


// app.use((req,res,next) => {

//     res.status(200).json({

//         message :'It works'
//     });

// });

// app.use(CONSTANTS);
// app.use(calculateTariffs);
app.use('/tariffs', tariffRoutes);
app.use('/vendors', vendorRoutes);
// app.use(CONSTANTS);
module.exports = calculateTariffs;
module.exports = vendorDAO;
module.exports = app;