'use strict';

const util = require('util');
const VerifiedCredentialsGenerator = require('./vc-generator');

class VoucherGenerator extends VerifiedCredentialsGenerator{
    constructor() {
        super();
    }

    async getFieldsMap(){
        return {
            'offer.value' : 'credentialPreview.credentialSubject.offer.value',
            'offer.currency' : 'credentialPreview.credentialSubject.offer.value',
            'issuedBy.logo' : 'credentialPreview.credentialSubject.issuedBy.logo',
            'issuedBy.name' : 'credentialPreview.credentialSubject.issuedBy.name',
            'identifier' : 'credentialPreview.credentialSubject.identifier'
        };
    }
}

module.exports = VoucherGenerator 