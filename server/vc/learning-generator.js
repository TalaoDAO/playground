'use strict';

const util = require('util');
const VerifiedCredentialsGenerator = require('./vc-generator');

class LearningGenerator extends VerifiedCredentialsGenerator{
    constructor() {
        super();
    }

    async getFieldsMap(){
        return {
            'familyName' : 'credentialPreview.credentialSubject.familyName',
            'givenName' : 'credentialPreview.credentialSubject.givenName',
            'issuedBy.logo' : 'credentialPreview.credentialSubject.issuedBy.logo',
            'issuedBy.name' : 'credentialPreview.credentialSubject.issuedBy.name',
            'issuedBy.address' : 'credentialPreview.credentialSubject.issuedBy.address',
            'birthDate' : 'credentialPreview.credentialSubject.birthDate',
            'hasCredential.title' : 'credentialPreview.credentialSubject.hasCredential.title',
            'hasCredential.description' : 'credentialPreview.credentialSubject.hasCredential.description',
        };
    }
}

module.exports = LearningGenerator 