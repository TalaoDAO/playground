const { User } = require("../models");
const util = require('util');
const mydidkit = require("../vc/didkit-handler.js");
const fs = require('fs');
const VoucherGenerator=require('../vc/voucher-generator');
const https = require('https');
const didkit= require('../vc/didkit-handler')

require('dotenv').config()

exports.discount_offer_get = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.DISCOUNT_COUPON_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let voucherGenerator = new VoucherGenerator();
            let values={'offer.value':100,'offer.currency':'USD','issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ','issuedBy.name':'Tezotopia','identifier':0123456};
            await voucherGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            console.log(JSON.stringify(offer));
            res.json(offer);
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.discount_offer_post = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            
            console.log(req.body);

            

            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.DISCOUNT_COUPON_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let voucherGenerator = new VoucherGenerator();
            let values={'offer.value':100,'offer.currency':'USD','issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ','issuedBy.name':'Tezotopia','identifier':0123456};
            await voucherGenerator.generate(process.env.DEFAULT_JWK,offer,values,senderId);
            let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);

            console.log(signed);

            res.json(signed);
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
   

}

// Display list of all Authors.
exports.test = function(req, res) {

    console.log(req.url);
    console.log(process.env.NODE_ENV);

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
    
    
}

