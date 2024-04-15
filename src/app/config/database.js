const Sequelize = require('sequelize');

const sequelize = new Sequelize('tcit_challenge_db', 'postgres', 'Dracula241988.', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;