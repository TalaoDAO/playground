'use strict';

const util = require('util');
const VerifiedCredentialsGenerator = require('./vc-generator');

class VoucherGenerator extends VerifiedCredentialsGenerator{
    constructor() {
        super();
    }

    async getFieldsMap(){
        return {
            'discountPercentage.value' : 'credentialPreview.credentialSubject.discountPrecentage.value',
            'discountDeadline' : 'credentialPreview.credentialSubject.discountDeadline',
            'issuedBy.logo' : 'credentialPreview.credentialSubject.issuedBy.logo',
            'issuedBy.name' : 'credentialPreview.credentialSubject.issuedBy.name'
        };
    }
}

module.exports = VoucherGenerator 