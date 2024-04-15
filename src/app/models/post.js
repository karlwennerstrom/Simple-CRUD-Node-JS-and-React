const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('post', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'posts'
});

module.exports = Post;