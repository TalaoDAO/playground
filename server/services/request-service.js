const { User, UserRequest } = require("../models");
const crypto = require('crypto');
const userService = require("./user-service");


const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint, errors } = format;

require('dotenv').config()

const logger = createLogger({
    level: 'debug',
    format: combine(
        errors({ stack: true }),
        timestamp(),
        prettyPrint()
    ),
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
    ],
});

exports.createRequest = async function (userId, type, data) {
    logger.debug(data);

    let uuid = await crypto.randomUUID();
    uuid= "urn:uuid:"+uuid;
    let userRequest = await UserRequest.create({
        userId: userId,
        type: type,
        data: data,
        uuid: uuid

    });

    return uuid;


}

exports.getRequest = async function (uuid) {

    let request = await UserRequest.findOne({
        where: { uuid: uuid },
    });
    return request;
}

exports.getDiplomaValues = async function (uuid) {
    let request = await this.getRequest(uuid);

    if (!request) {
       return null;
    } 
    return {
        familyName: request.data.familyName,
        givenName: request.data.givenName,
        'issuedBy.logo': process.env.DIPLOMA_LOGO_URL,
        'issuedBy.name': 'University of Web Design',
        'issuedBy.address': 'Paris',
        'hasCredential.title': request.data.credentialTitle,
        'hasCredential.description': request.data.credentialDescription,
        'birthDate': request.data.birthDate

    };
}

exports.getEmailValues = async function (uuid) {
    let user = await userService.getUserByChallenge(uuid);

    if (!user) {
       return null;
    } 
    logger.debug(JSON.stringify(user))
    return {
        email: user.email,
        'issuedBy.logo':process.env.EMAIL_LOGO_URL,
        'issuedBy.name':'Talao'

    };
}

exports.getStudentValues = async function (uuid) {
    let request = await this.getRequest(uuid);

    if (!request) {
       return null;
    } 
    return {
        'recipient.familyName':request.data.familyName,
        'recipient.givenName':request.data.givenName,
        'recipient.birthDate':request.data.birthDate,
        'recipient.image':process.env.STUDENT_IMAGE_URL,
        'recipient.signatureLines.image':process.env.STUDENT_SIGNATURE_URL,
        'issuedBy.logo':process.env.STUDENT_LOGO_URL,
        'issuedBy.name':'Talao CFA',
        'issuedBy.address':'16 rue de Wattignies, 75012 Paris, France',
        'issuedBy.directorName':request.data.directorName

    };
}

exports.getEmployerValues = async function (uuid) {
    let request = await this.getRequest(uuid);

    if (!request) {
       return null;
    } 
    return {
        'familyName':request.data.familyName,
        'givenName':request.data.givenName,
        'workFor.logo':process.env.EMPLOYER_LOGO_URL,
        'workFor.name':'Talao',
        'workFor.address':'16 rue de Wattignies, 75012 Paris, France',
        'employmentType':request.data.employmentType,
        'baseSalary':request.data.baseSalary,
        'startDate':request.data.startDate,
        'jobTitle':request.data.jobTitle
    };;
}

exports.getAuthenticationRequest = async function (uuid) {
    let request = await this.getRequest(uuid);

    if (!request) {
       return null;
    } 

    return request;
}

exports.validateCredentials = async function (receivedCredentials){

    console.log(receivedCredentials);
    let rc= await JSON.parse(receivedCredentials);

    let uuid=rc.id;
    let creds=rc.verifiableCredential;

    if(!creds)
        return null;

    if(Array.isArray(creds)) {
        if(creds.length==0){
            return null;
        }

        logger.debug("creds="+JSON.stringify(creds));
        for (var i = 0; i < creds.length; i++){
            if(creds[i].credentialSubject.type==='EmailPass'){
                logger.debug("email="+creds[i].credentialSubject.email);
                return creds[i].credentialSubject.email;
            }
            console.log(creds[i]);
        }
    }else{
        if(creds.credentialSubject.type==='EmailPass'){
            logger.debug("single email="+creds.credentialSubject.email);
            return creds.credentialSubject.email;
        }
    }
    

    

    return null;

}