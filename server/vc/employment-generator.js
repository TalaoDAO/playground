'use strict';

const util = require('util');
const VerifiedCredentialsGenerator = require('./vc-generator');

class EmploymentGenerator extends VerifiedCredentialsGenerator{
    constructor() {
        super();
    }

    async getFieldsMap(){
        return {
            'familyName' : 'credentialPreview.credentialSubject.familyName',
            'givenName' : 'credentialPreview.credentialSubject.givenName',
            'workFor.logo' : 'credentialPreview.credentialSubject.workFor.logo',
            'workFor.name' : 'credentialPreview.credentialSubject.workFor.name',
            'workFor.address' : 'credentialPreview.credentialSubject.workFor.address',
            'startDate' : 'credentialPreview.credentialSubject.startDate',
            'employmentType' : 'credentialPreview.credentialSubject.employmentType',
            'baseSalary' : 'credentialPreview.credentialSubject.baseSalary',
            'jobTitle' : 'credentialPreview.credentialSubject.jobTitle'
        };
    }
}

module.exports = EmploymentGenerator 