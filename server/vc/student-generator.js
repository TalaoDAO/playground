'use strict';

const util = require('util');
const VerifiedCredentialsGenerator = require('./vc-generator');

class StudentGenerator extends VerifiedCredentialsGenerator{
    constructor() {
        super();
    }

    async getFieldsMap(){
        return {
            'recipient.familyName' : 'credentialPreview.credentialSubject.recipient.familyName',
            'recipient.givenName' : 'credentialPreview.credentialSubject.recipient.givenName',
            'recipient.birthDate' : 'credentialPreview.credentialSubject.recipient.birthDate',
            'recipient.signatureLines.image' : 'credentialPreview.credentialSubject.recipient.signatureLines.image',
            'recipient.image' : 'credentialPreview.credentialSubject.recipient.image',
            'issuedBy.logo' : 'credentialPreview.credentialSubject.issuedBy.logo',
            'issuedBy.name' : 'credentialPreview.credentialSubject.issuedBy.name',
            'issuedBy.address' : 'credentialPreview.credentialSubject.issuedBy.address',
            'issuedBy.directorName' : 'credentialPreview.credentialSubject.issuedBy.directorName'
        };
    }
}

module.exports = StudentGenerator 