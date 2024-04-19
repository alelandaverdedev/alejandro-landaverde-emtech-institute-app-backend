const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_ROOT_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);
module.exports = sequelize;
