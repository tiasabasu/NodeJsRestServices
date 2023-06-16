const mysql = require('mysql');


const db = mysql.createConnection ({
    host: "capitagreendb.hackathon2023-capita-greens.svc.cluster.local",
    user: "root",
    password: "capita",
    database: "capita_greendb"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL database!");
});



this.getVendorData = function (pinCode){
    console.log('AAAAAAAAAAAAAAAAAAAAAAAA' + pinCode);
    return new Promise(function(resolve,reject){
        var pinCode = pinCode;
        var sql = 'select provider_name, contact_no, rating_in_5 from capita_greendb.provider_detail order by RAND() limit 10';
        var vendordata = '';
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');
        db.query(sql, [pinCode], function (err, result) {
            if (err){
                console.log('CCCCCCCCCCCCCCCCCCCCBBBBB'+ err) ;
                return reject(err);
            }
            else {
                console.log(result);
                    resolve(result);
            }
        });
    });
}







// this.getVendorData = function (pinCode){
//     let output = [{
//             pincode : 700156,
//             Provider_Name :'P. Voltaic Power Pvt Ltd.' ,
//             Contact_No :9843238844,
//             Rating_in_5: 3.5
//     },
//     {
//     pincode : 700156,
//     Provider_Name :'Meghjit Power Solutions LLP' ,
//     Contact_No :9843238848,
//     Rating_in_5: 4.5
//     }];
//     console.log(output);
//     return output;
// }