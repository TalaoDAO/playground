const util = require('util');
const { randomUUID } = require('crypto');
const mydidkit = require("./mydidkit.js");


exports.createOffer = async function (privateKey,template, values,callback) {

    (async ()=>{

        try {
            const offer=await JSON.parse(template);

            offer.credentialPreview.credentialSubject.discountPrecentage.value=values.discountPercentage;
            offer.credentialPreview.credentialSubject.discountDeadline=values.discountDeadline.toISOString();
            offer.credentialPreview.credentialSubject.issuedBy.name='ACME Corporation';
            offer.credentialPreview.credentialSubject.id='ACME Corporation';
            offer.credentialPreview.id='urn:uuid:'+randomUUID()

            var did=null;
            await mydidkit.getdid(process.env.DEFAULT_JWK, function(result){
                did=result;
            });
            offer.credentialPreview.issuer=did;
            offer.credentialPreview.credentialSubject.id=did;
            offer.credentialPreview.issuanceDate=(new Date()).toISOString();

            console.log(JSON.stringify(offer));
            callback(offer);
        } catch (error) {
            console.error(error)
            callback(null);
        }

    })().catch((error)=>{
        console.log(`ERROR (async): ${util.inspect(error, {depth: null})}`);
        callback(null);
    });
    
};
