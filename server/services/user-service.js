const { User, UserRequest } = require("../models");
var nodemailer = require('nodemailer');

const db=require("../db");

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



exports.getUser = async function (email) {

    let user = await User.findOne({
        where: { email: email },
    });
    return user;
}

exports.createUser = async function (email, givenName, familyName) {
    let val = await Math.floor(1000 + Math.random() * 9000);
    logger.debug("code="+val);
    let sequelize=await db.getConnection();
    const t = await sequelize.transaction();
    try {
        let user = await User.create({
            email: email,
            name: givenName + ' ' + familyName,
            code: parseInt(val)
        }, { transaction: t });
        await sendCode(user);
        await t.commit();
        return user;
    } catch (error) {
        await t.rollback();
        console.error(error)
        return null;
    }
    

}

const { EMAIL, PASSWORD } = process.env;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
});


async function sendCode(user) {
    var mailOptions = {
        from: EMAIL,
        to: user.email,
        subject: 'Validation code for playground.talao.co',
        text: 'Validation Code: ' + user.code
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            logger.error(error);
        } else {
            logger.info('Email sent: ' + info.response);
        }
    });


}

exports.validateUser = async function (email, code) {

    let user = await User.findOne({
        where: { email: email, code: code }
    });
    return user;
}
