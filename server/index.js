// server/index.js

const express = require("express");
const cors = require('cors');
const { User } = require("./models");
const util = require('util');
const vcCreator = require("./vcCreator.js");
const fs = require('fs');

require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working

const PORT = process.env.PORT || 3001;


const app = express();

app.use(cors())

app.get("/api", (req, res) => {
    console.log(req.url);
    
    res.json({ message: "Hello World from server!" });
    
});

app.get("/test", (req, res) => {
    console.log(req.url);
    console.log(process.env.NODE_ENV);
    
    /*const jane = User.count()
    .then(c => {
        console.log(c);
    });*/


    /*console.log(process.env.DEFAULT_JWK);
    mydidkit.getdid(process.env.DEFAULT_JWK,function(result) {
        console.log("[RETURNED]"+JSON.stringify(result));
    })*/

    
    (async() =>{

        try {
            await User.findOne()
            .then( user => {
                res.json(user.toJSON());
        
            });
    
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

        
    })().catch((error)=>{
		console.log(`async error: ${util.inspect(error, {depth: null})}`);
		res.json({ message: error });
	});
    

    res.json({ message: "Hello World from server!" });
    
});

app.get("/discount-offer", (req, res) => {
    console.log(req.url);
    
    let rawdata = fs.readFileSync(process.env.DISCOUNT_COUPON_TEMPLATE);
    vcCreator.createOffer(process.env.DEFAULT_JWK,rawdata,{discountPercentage:0.15,discountDeadline: new Date()},function(result){
        res.json(result);
    });
    
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
