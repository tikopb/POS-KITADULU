const Sequelize = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
    );

module.exports = sequelize;