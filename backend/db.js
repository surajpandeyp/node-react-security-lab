const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"suraj12",
    database:"katana_lab"
});

db.connect((err,result)=>{
    if(err){
        console.log("db error",err);
        
    }else{
        console.log("database connect:");
        
    }
})

module.exports = db;