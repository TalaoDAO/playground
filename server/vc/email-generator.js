'use strict';

const util = require('util');
const VerifiedCredentialsGenerator = require('./vc-generator');

class EmailGenerator extends VerifiedCredentialsGenerator{
    constructor() {
        super();
    }

    async getFieldsMap(){
        return {
            'email' : 'credentialPreview.credentialSubject.email',
            'issuedBy.logo' : 'credentialPreview.credentialSubject.issuedBy.logo',
            'issuedBy.name' : 'credentialPreview.credentialSubject.issuedBy.name'
        };
    }
}

module.exports = EmailGenerator 