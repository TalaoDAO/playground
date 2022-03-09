const { User, UserRequest } = require("../models");
const crypto = require('crypto');

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
    logger.debug(request)
    return {
        familyName: request.data.familyName,
        givenName: request.data.givenName,
        'issuedBy.logo': 'https://talao.mypinata.cloud/ipfs/QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ',
        'issuedBy.name': 'University',
        'issuedBy.address': 'Athens',
        'hasCredential.title': request.data.credentialTitle,
        'hasCredential.description': request.data.credentialDescription,
        'birthDate': request.data.birthDate

    };
}