const mysql = require('mysql');

// var conn = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword",
//   database: "mydb"
// });


// const db = mysql.createConnection ({
//     host: "localhost",
//     user: "yourusername",
//     password: "yourpassword",
//     database: "mydb"
// });

// db.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected to MySQL database!");
// });



// this.getVendorData = function (pinCode){
//     var pinCode = pinCode;
//     var sql = 'SELECT * FROM capita_greendb.provider_detail where pincode = ? ';
//     db.query(sql, [pinCode], function (err, result) {
//         if (err){
//             throw err;
//         }
//         else {
//             console.log(result);
//         }
//     });
//     return result;
// }





this.getVendorData = function (pinCode){
    let output = [{
            pincode : 700156,
            Provider_Name :'P. Voltaic Power Pvt Ltd.' ,
            Contact_No :9843238844,
            Rating_in_5: 3.5
    },
    {
    pincode : 700156,
    Provider_Name :'Meghjit Power Solutions LLP' ,
    Contact_No :9843238848,
    Rating_in_5: 4.5

    }];
    console.log(output);
    return output;
}