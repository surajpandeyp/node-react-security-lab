const express = require("express");
const router = express.Router();
const db = require("../db");


router.post("/login", (req,res) =>{
    const {username,password} = req.body;

    const slq =
        "SELECT * FROM users WHERE username='" +
        username +
        "' AND password='" +
        password +
        "'";

    db.query(slq,(err,result) =>{
        if(err){
            return res.status(500).send(err.message)
        }

        if(result.length > 0){
            return res.send("login successfully")
        }else{
            return res.status(401).send("invalid credential")
        }
    })    
})


module.exports = router;