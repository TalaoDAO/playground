'use strict';

const { Console } = require('console');
const util = require('util');
const didkit= require('./didkit-handler')
const { randomUUID } = require('crypto');

class VerifiableCredentialsGenerator {
    constructor() {
        if(this.constructor==VerifiableCredentialsGenerator){
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    /**
     * Abstract method
     * @returns {Array} An associative array of fields and the path to the value in credential offer json
     */
    async getFieldsMap() {
        throw new Error("Method getFieldsMap() must be implemented.")
    }

   /**
    * Generate the Credential Offer
    * @param {String} privateKey The private key in JWT format
    * @param {String} credentialOffer The credential offer in a JSON object
    * @param {Array} values An associative array of values that are to be included in the offer
    * 
    */
    async generate(privateKey, credentialOffer, values, senderId=null) {
       
        await this.loadValues(values,credentialOffer);
        await this.loadDidDetails(privateKey,credentialOffer,senderId);   
    }

    /**
     * Loads the subject values
     * @param {Array} values An associative array of values that are to be included in the offer
     * @param {String} credentialOffer The credential offer in a JSON object
     */
    async loadValues(values, credentialOffer) {
        var fieldsMap=await this.getFieldsMap();
        
        await Object.entries(fieldsMap).forEach(([key,path]) => {
            (async ()=>{
                var value=values[key];
                if(value!=null){
                    var parts=await path.split(".");
                    var position=credentialOffer;
                    for(var i=0;i<parts.length-1;i++){
                        position=position[parts[i]];
                    }
                    position[parts[parts.length-1]]=value;

                }
            })();
        });
    }

    /**
     * 
     * @param {String} privateKey The private key in JWT format
     * @param {String} credentialOffer The credential offer in a JSON object
     * @param {*} senderId The id of the sender, null if not provided
     */
    async loadDidDetails(privateKey, credentialOffer, senderId=null) {

        credentialOffer.credentialPreview.id='urn:uuid:'+randomUUID(); //TODO: associate the number? store it?

        let issuerDid=await didkit.getdid(process.env.DEFAULT_JWK);
        credentialOffer.credentialPreview.issuer=issuerDid;
        if(senderId!=null){
            credentialOffer.credentialPreview.credentialSubject.id = senderId;
        }else{
            credentialOffer.credentialPreview.credentialSubject.id = issuerDid;
        }

        credentialOffer.credentialPreview.issuanceDate=(new Date()).toISOString();

    }

    

}

module.exports = VerifiableCredentialsGenerator 