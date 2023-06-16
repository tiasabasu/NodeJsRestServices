const express= require('express');
const app = express();


app.use('/', express.static('dist/solar-calculator-app'));
app.use('/home', express.static('dist/solar-calculator-app'));
app.use('/inputData', express.static('dist/solar-calculator-app'));
app.use('/calculate', express.static('dist/solar-calculator-app'));
app.use('/savingss', express.static('dist/solar-calculator-app'));
app.use('/vendorsdata', express.static('dist/solar-calculator-app'));
app.use('/solarblog', express.static('dist/solar-calculator-app'));
app.use('/contactus', express.static('dist/solar-calculator-app'));

console.log('Solar app added');

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