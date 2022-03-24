const { User, UserRequest } = require("../models");
var nodemailer = require('nodemailer');
const crypto = require('crypto');

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

exports.getUserByChallenge = async function (challenge) {

    let user = await User.findOne({
        where: { challenge: challenge, active: true },
    });
    return user;
}

exports.createUser = async function (email, givenName, familyName) {
    let val = await Math.floor(1000 + Math.random() * 9000);
    let uuid = await crypto.randomUUID();

    logger.debug("code="+val);
    let sequelize=await db.getConnection();
    const t = await sequelize.transaction();
    try {
        let user = await User.create({
            email: email,
            name: givenName + ' ' + familyName,
            code: parseInt(val),
            challenge: 'url:uuid:'+uuid
        }, { transaction: t });
        await sendCode(user);
        await t.commit();
        return user;
    } catch (error) {
        await t.rollback();
        logger.error(error)
        return null;
    }
    

}

const { EMAIL, PASSWORD } = process.env;



async function sendCode(user) {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });

    transporter.verify().then(console.log).catch(logger.error);

    var html = `
    <!DOCTYPE html>
    <html>
    <body>
    <p><font size="+1">Hello <b>`+user.name+`</b></font></p>
    <p><font size="+1">Thanks for registering and welcome to Talao Playground!</font></p>

    <p><font size="+1">The validation code for your account is: <b>`+user.code+`</b></font></p>

    <p><font size="+1">The Talao Team</font></p>
    <img src="https://talao.mypinata.cloud/ipfs/QmNwbEEupT7jR2zmrA87FsN4hUS8eXnCxM8DsL9RXc25cu" height="150px"/>
    
    </body>
    </html>

    `;
    
    var mailOptions = {
        from: EMAIL,
        to: user.email,
        subject: 'Validation code for playground.talao.co',
        html: html
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
