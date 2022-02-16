const sqlite3 = require('sqlite3').verbose();
const { Sequelize } = require('sequelize');


exports.create = async function (callback) {

    try {
        let db = new sqlite3.Database(process.env.DB_FILE, (err) => {
            if (err) {
                throw new Error("Error connecting in database. " + err.message);
            }
            console.log('Connected to the database.');


        });

        db.run('CREATE TABLE langs(name text)');

        db.close((err) => {
            if (err) {
                throw new Error("Error closing the database. " + err.message);
            }
            console.log('Close the database connection.');
        });

        callback(true);

    } catch (error) {
        console.error(error)
        callback(false);
    }
};

exports.getConnection = async function (callback) {

    try {
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: process.env.DB_FILE
            });

            await sequelize.authenticate();
            console.log('Connection has been established successfully.');

            callback(sequelize);

    } catch (error) {
        console.log("error");
        console.error(error)
        callback(null);
    } 

};