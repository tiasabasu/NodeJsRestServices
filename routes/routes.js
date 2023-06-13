const vendorRoutes = require('./vendors');
const tariffRoutes = require('./tariffs');


app.use('/tariffs', tariffRoutes)

// const appRouter = (app, fs) => {

// // we've added in a default route here that handles empty routes
//   // at the base API url
//   app.get('/', (req, res) => {
//     res.send('welcome to the development api-server111111');
//   });

//   // run our user route module here to complete the wire up
//   vendorRoutes(app, fs);

//   //run tariff route 
//   tariffRoutes(app);


// };

module.exports = app;