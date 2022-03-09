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

    let uuid = crypto.randomUUID();
    let userRequest = await UserRequest.create({
        userId: userId,
        type: type,
        data: data,
        uuid: uuid

    });

    return uuid;


}