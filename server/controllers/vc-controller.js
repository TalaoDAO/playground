const { User } = require("../models");
const util = require('util');
const mydidkit = require("../vc/didkit-handler.js");
const fs = require('fs');
const VoucherGenerator=require('../vc/voucher-generator');
const didkit= require('../vc/didkit-handler');
const LearningGenerator = require("../vc/learning-generator");
const EmploymentGenerator = require("../vc/employment-generator");
const StudentGenerator = require("../vc/student-generator");
const EmailGenerator = require("../vc/email-generator");
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint, errors } = format;
const requestService = require("../services/request-service");
const userService = require("../services/user-service");

const websockets = require('../websockets');


require('dotenv').config()


const logger =  createLogger({
    level: 'debug',
    format: combine(
        errors({ stack: true }),
        timestamp(),
        prettyPrint()
    ),
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new transports.File({ filename: 'error.log', level: 'error'}),
      new transports.File({ filename: 'combined.log'}),
    ],
  });

  

async function send(uuid, message){

    if (uuid) {
        if (!message)
            message = "Hello World from NodeJS server!";
        websockets.send(uuid, message);
        
        return;
    }

}

exports.discount_offer_get = function(req, res) {
    logger.debug(req.url);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.DISCOUNT_COUPON_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let voucherGenerator = new VoucherGenerator();
            let values={'offer.value':100,'offer.currency':'USD','issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ','issuedBy.name':'Tezotopia','identifier':0123456};
            await voucherGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            logger.debug(JSON.stringify(offer));
            res.json(offer);
            return;
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.discount_offer_post = function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    (async() =>{
        try {
            
            logger.debug(req.body);
            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.DISCOUNT_COUPON_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let voucherGenerator = new VoucherGenerator();
            let values={'offer.value':100,'offer.currency':'USD','issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ','issuedBy.name':'Tezotopia','identifier':0123456};
            await voucherGenerator.generate(process.env.DEFAULT_JWK,offer,values,senderId);
            let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);

            logger.debug(signed);

            res.json(signed);
            
            send(req.params.uuid,JSON.stringify({result:"success",challenge:req.params.uuid}));
            return;
        } catch (error) {
            console.error(error)
            res.json({ message: error });
            send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}));
        }

    })();
    
}

exports.learning_get = async function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);

    try {
        let rawdata = fs.readFileSync(process.env.LEARNING_TEMPLATE);
        let offer=await JSON.parse(rawdata);
        let learningGenerator = new LearningGenerator();
        
        let values=await requestService.getDiplomaValues(req.params.uuid);
        
        if(values){
            await learningGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            logger.debug(JSON.stringify(offer));
            res.json(offer);
            return;
        }else{
            console.error("Request not found.")
            res.json({ message: "Request not found." });
            return;
        }
        
    } catch (error) {
        console.error(error)
        res.json({ message: error });
    }

    
}

exports.learning_post = async function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);
    try {
        let senderId=req.body['subject_id'];

        let rawdata = fs.readFileSync(process.env.LEARNING_TEMPLATE);
        let offer=await JSON.parse(rawdata);
        let learningGenerator = await new LearningGenerator();
        let values=await requestService.getDiplomaValues(req.params.uuid);
        if(values){
            await learningGenerator.generate(process.env.DEFAULT_JWK,offer,values,senderId);
            let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);
            logger.debug(signed);
            res.json(signed);
            send(req.params.uuid,JSON.stringify({result:"success",challenge:req.params.uuid}));
            return;
        }else{
            console.error("Request not found.")
            res.json({ message: "Request not found." });
            send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}));
            return;
        }

        
    } catch (error) {
        console.error(error)
        res.json({ message: error });
        send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}));
    }

    

    
}


exports.employment_get = function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.EMPLOYMENT_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let employmentGenerator = new EmploymentGenerator();
            
            let values=await requestService.getEmployerValues(req.params.uuid);
            if(values){
                await employmentGenerator.generate(process.env.DEFAULT_JWK,offer,values);
                logger.debug(JSON.stringify(offer));
                res.json(offer);
                return;
            }else{
                console.error("Request not found.")
                res.json({ message: "Request not found." });
                return;
            }
            
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.employment_post = function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);
    (async() =>{
        try {
            logger.debug(req.body);
            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.EMPLOYMENT_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let employmentGenerator = new EmploymentGenerator();

            let values=await requestService.getEmployerValues(req.params.uuid);
            if(values){
                await employmentGenerator.generate(process.env.DEFAULT_JWK,offer,values);
                let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);
                logger.debug(signed);
                res.json(signed);
                send(req.params.uuid,JSON.stringify({result:"success",challenge:req.params.uuid}));
                return;
            }else{
                console.error("Request not found.")
                res.json({ message: "Request not found." });
                send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}));
                return;
            }
            
           
        } catch (error) {
            console.error(error)
            res.json({ message: error });
            send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}));
        }

    })();
    
}


exports.student_get = function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.STUDENT_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let studentGenerator = new StudentGenerator();
            let values=await requestService.getStudentValues(req.params.uuid);
            if(values){
                await studentGenerator.generate(process.env.DEFAULT_JWK,offer,values);
                logger.debug(JSON.stringify(offer));
                res.json(offer);
                return;
            }else{
                console.error("Request not found.")
                res.json({ message: "Request not found." });
                return;
            }
            
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.student_post = function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);
    (async() =>{
        try {
            logger.debug(req.body);
            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.STUDENT_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let studentGenerator = new StudentGenerator();
           
            let values=await requestService.getStudentValues(req.params.uuid);
            if(values){
                await studentGenerator.generate(process.env.DEFAULT_JWK,offer,values);
                let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);
                logger.debug(signed);
                res.json(signed);
                send(req.params.uuid,JSON.stringify({result:"success",challenge:req.params.uuid}));
                return;
            }else{
                console.error("Request not found.")
                res.json({ message: "Request not found." });
                send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}));
                return;
            }
            
        } catch (error) {
            console.trace(error)
            res.json({ message: error });
            send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}));
        }

    })();
    
}


exports.email_get = function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.EMAIL_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let emailGenerator = new EmailGenerator();
            
            let values=await requestService.getEmailValues(req.params.uuid);
            if(values){
                await emailGenerator.generate(process.env.DEFAULT_JWK,offer,values);
                logger.debug(JSON.stringify(offer));
                res.json(offer);
                return;
            }else{
                console.error("Request not found.")
                res.json({ message: "Request not found." });
                return;
            }
    
            
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.email_post = function(req, res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);
    (async() =>{
        try {
            logger.debug(req.body);
            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.EMAIL_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let emailGenerator = new EmailGenerator();
            let values=await requestService.getEmailValues(req.params.uuid);
            if(values){
                await emailGenerator.generate(process.env.DEFAULT_JWK,offer,values);
                let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);
                logger.debug(signed);
                res.json(signed);
                send(req.params.uuid,JSON.stringify({result:"success",challenge:req.params.uuid}))
                return;
            }else{
                console.error("Request not found.")
                res.json({ message: "Request not found." });
                send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}))
                return;
            }
    
           
        } catch (error) {
            console.error(error)
            res.json({ message: error });
            send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}))
        }

    })();
    
}

exports.authentication_get = function(req,res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);
    (async() =>{
        try {
            var presentation= {
                "challenge": "",
                "domain": "",
                "query": [
                    {
                        "credentialQuery": [
                            {
                                "example": {
                                    "type": "VerifiableCredential"
                                }
                            }
                        ],
                        "type": "QueryByExample"
                    }
                ],
                "type": "VerifiablePresentationRequest"
            };
            let request=await requestService.getAuthenticationRequest(req.params.uuid);
            if(request){
                res.json(presentation);
                return;
            }else{
                console.error("Request not found.")
                res.json({ message: "Request not found." });
                return;
            }
    
            
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
    
}


exports.authentication_post = function(req,res) {
    logger.debug(req.url);
    logger.debug(req.body);
    logger.debug(req.params.uuid);

    (async() =>{
 
        try {
            let request=await requestService.getAuthenticationRequest(req.params.uuid);
            if(request){
                let email=await requestService.validateCredentials(req.body['presentation']);
                let user = await userService.getUser(email);
                var names=user.name.split(" ");
                if(user) {

                    send(req.params.uuid,JSON.stringify({result:'success', email:user.email, givenName:names[0], familyName:names[1]}))
                    res.json({result:'success', email:user.email, givenName:names[0], familyName:names[1]});
                    return;
            
                }else{
                    console.error("User not found.")
                    send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}))
                    res.json({ message: "User not found." });
                    return;
                }
            }else{
                console.error("Request not found.")
                res.json({ message: "Request not found." });
                send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}))
                return;
            }
            
           
        } catch (error) {
            console.error(error)
            res.json({ message: error });
            send(req.params.uuid,JSON.stringify({result:"failure",challenge:req.params.uuid}))
        }

        
    })().catch((error)=>{
		logger.debug(`async error: ${util.inspect(error, {depth: null})}`);
		res.json({ message: error });
	});
    return;
}


// Display list of all Authors.
exports.test = function(req, res) {

    logger.debug(req.url);
    logger.debug(process.env.NODE_ENV);

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
		logger.debug(`async error: ${util.inspect(error, {depth: null})}`);
		res.json({ message: error });
	});
    
    
}

