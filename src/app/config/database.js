const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.REACT_APP_DB_NAME, process.env.REACT_APP_DB_USER, process.env.REACT_APP_DB_PASSWORD, {
  host: process.env.REACT_APP_DB_HOST,
  dialect: 'postgres',
  });
module.exports = sequelize;