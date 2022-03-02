const { User } = require("../models");
const util = require('util');
const mydidkit = require("../vc/didkit-handler.js");
const fs = require('fs');
const VoucherGenerator=require('../vc/voucher-generator');
const https = require('https');
const didkit= require('../vc/didkit-handler');
const LearningGenerator = require("../vc/learning-generator");
const EmploymentGenerator = require("../vc/employment-generator");
const StudentGenerator = require("../vc/student-generator");
const EmailGenerator = require("../vc/email-generator");

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

exports.learning_get = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.LEARNING_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let learningGenerator = new LearningGenerator();
            let values={
                'familyName':'Doe',
                'givenName':'Jane',
                'issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ',
                'issuedBy.name':'University',
                'issuedBy.address':'Athens',
                'hasCredential.title':"Diploma",
                'hasCredential.description':"Higher Education Diploma",
                'birthDate':"2001-03-01"
            };
            await learningGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            console.log(JSON.stringify(offer));
            res.json(offer);
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.learning_post = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            console.log(req.body);
            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.LEARNING_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let learningGenerator = new LearningGenerator();
            let values={
                'familyName':'Doe',
                'givenName':'Jane',
                'issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ',
                'issuedBy.name':'University',
                'issuedBy.address':'Athens',
                'hasCredential.title':"Diploma",
                'hasCredential.description':"Higher Education Diploma",
                'birthDate':"2001-03-01"
            };
            await learningGenerator.generate(process.env.DEFAULT_JWK,offer,values,senderId);
            let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);
            console.log(signed);
            res.json(signed);
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}


exports.employment_get = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.EMPLOYMENT_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let employmentGenerator = new EmploymentGenerator();
            let values={
                'familyName':'Doe',
                'givenName':'Jane',
                'workFor.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ',
                'workFor.name':'Talao',
                'workFor.address':'16 rue de Wattignies, 75012 Paris, France',
                'employmentType':"Open ended contract",
                'baseSalary':"65000 euros",
                'startDate':"2021-03-01",
                'jobTitle':'Engineer'
            };
            await employmentGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            console.log(JSON.stringify(offer));
            res.json(offer);
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.employment_post = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            console.log(req.body);
            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.EMPLOYMENT_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let employmentGenerator = new EmploymentGenerator();
            let values={
                'familyName':'Doe',
                'givenName':'Jane',
                'workFor.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ',
                'workFor.name':'Talao',
                'workFor.address':'16 rue de Wattignies, 75012 Paris, France',
                'employmentType':"Open ended contract",
                'baseSalary':"65000 euros",
                'startDate':"2001-03-01",
                'jobTitle':'Engineer'
            };
            await employmentGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);
            console.log(signed);
            res.json(signed);
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}


exports.student_get = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.STUDENT_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let studentGenerator = new StudentGenerator();
            let values={
                'recipient.familyName':'Doe',
                'recipient.givenName':'Jane',
                'recipient.birthDate':"2001-03-01",
                'recipient.image':'https://gateway.pinata.cloud/ipfs/QmSSJooT2JFraZFNHavVLQzzxwSpg3ithJL4ztGYY9MpBY',
                'recipient.signatureLines.image':'https://gateway.pinata.cloud/ipfs/QmeMfck3z6K5p8xmCqQpjH3R7s3YddR5DsMNLewWvzQrFS',
                'issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ',
                'issuedBy.name':'Talao CFA',
                'issuedBy.address':'16 rue de Wattignies, 75012 Paris, France',
                'issuedBy.directorName':'Nicolas Muller'
            };
            await studentGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            console.log(JSON.stringify(offer));
            res.json(offer);
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.student_post = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            console.log(req.body);
            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.STUDENT_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let studentGenerator = new StudentGenerator();
            let values={
                'recipient.familyName':'Doe',
                'recipient.givenName':'Jane',
                'recipient.birthDate':"2001-03-01",
                'recipient.image':'https://gateway.pinata.cloud/ipfs/QmSSJooT2JFraZFNHavVLQzzxwSpg3ithJL4ztGYY9MpBY',
                'recipient.signatureLines.image':'https://gateway.pinata.cloud/ipfs/QmeMfck3z6K5p8xmCqQpjH3R7s3YddR5DsMNLewWvzQrFS',
                'issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ',
                'issuedBy.name':'Talao CFA',
                'issuedBy.address':'16 rue de Wattignies, 75012 Paris, France',
                'issuedBy.directorName':'Nicolas Muller'
            };
            await studentGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            console.log(offer);
            let signed=await didkit.sign(process.env.DEFAULT_JWK,offer['credentialPreview']);
            console.log(signed);
            res.json(signed);
        } catch (error) {
            console.trace(error)
            res.json({ message: error });
        }

    })();
    
}


exports.email_get = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            let rawdata = fs.readFileSync(process.env.EMAIL_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let emailGenerator = new EmailGenerator();
            let values={
                'email':'john@doe.com',
                'issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmNwbEEupT7jR2zmrA87FsN4hUS8eXnCxM8DsL9RXc25cu',
                'issuedBy.name':'Talao'
            };
            await emailGenerator.generate(process.env.DEFAULT_JWK,offer,values);
            console.log(JSON.stringify(offer));
            res.json(offer);
        } catch (error) {
            console.error(error)
            res.json({ message: error });
        }

    })();
    
}

exports.email_post = function(req, res) {
    console.log(req.url);
    (async() =>{
        try {
            console.log(req.body);
            let senderId=req.body['subject_id'];

            let rawdata = fs.readFileSync(process.env.EMAIL_TEMPLATE);
            let offer=await JSON.parse(rawdata);
            let emailGenerator = new EmailGenerator();
            let values={
                'email':'john@doe.com',
                'issuedBy.logo':'https://talao.mypinata.cloud/ipfs/QmNwbEEupT7jR2zmrA87FsN4hUS8eXnCxM8DsL9RXc25cu',
                'issuedBy.name':'Talao'
            };
            await emailGenerator.generate(process.env.DEFAULT_JWK,offer,values);
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

