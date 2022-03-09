const sqlite3 = require('sqlite3').verbose();
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}



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

exports.getConnection = async function () {

    try {
        
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');

           return sequelize;

    } catch (error) {
        console.log("error");
        console.error(error)
        return null;
    } 

};