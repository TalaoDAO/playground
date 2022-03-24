const DIDKit = require('@spruceid/didkit-wasm-node');
const util = require('util');


exports.getdid = async function (privateKey) {

    try {
        var did = DIDKit.keyToDID('ethr',privateKey);
        return did;
    } catch (error) {
        logger.error(error)
    }
    return null;
    
};

exports.getVersion = async function () {

    try {
        
        return DIDKit.getVersion();
    } catch (error) {
        logger.error(error)
    }
    return null;
    
};

exports.sign = async function (privateKey,data) {

    try {
        const key=await JSON.parse(privateKey);
        let did = await this.getdid(privateKey);
        let proof_options={
            proofPurpose: "assertionMethod",
            verificationMethod: did+"#controller", //according to https://github.com/decentralized-identity/EcdsaSecp256k1RecoverySignature2020
        };

        //credential: string, proof_options: string, key: string
        const res=await DIDKit.issueCredential(JSON.stringify(data), JSON.stringify(proof_options),privateKey);

        return res;
    } catch (error) {
        logger.error(error)
    }

    return null;
};