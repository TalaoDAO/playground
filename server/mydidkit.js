const DIDKit = require('@spruceid/didkit');
const util = require('util');


exports.getdid = async function (privateKey,callback) {

    (async ()=>{

        try {
            const key=await JSON.parse(privateKey);
            const did = DIDKit.keyToDID('ethr', key);

            console.log(did);
            callback(did);
        } catch (error) {
            console.error(error)
            callback(null);
        }

    })().catch((error)=>{
        console.log(`ERROR (async): ${util.inspect(error, {depth: null})}`);
        callback(null);
    });
    
};

exports.sign = async function (privateKey,data,callback) {

    (async ()=>{

        try {
            const key=await JSON.parse(privateKey);
            const did = DIDKit.keyToDID('ethr', key);

            const vc=await JSON.parse(data);

            const res=await DIDKit.issueCredential(vc, {
                proofPurpose: "assertionMethod",
                verificationMethod: did+"#controller", //according to https://github.com/decentralized-identity/EcdsaSecp256k1RecoverySignature2020
            },
            key);

            console.log(JSON.stringify(res));

            callback(res);
        } catch (error) {
            console.error(error)
            callback(null);
        }

    })().catch((error)=>{
        console.log(`ERROR (async): ${util.inspect(error, {depth: null})}`);
        callback(null);
    });

};