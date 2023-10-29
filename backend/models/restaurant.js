// Restaurant.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Restaurant = sequelize.define('Restaurant', {
    restaurant_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Restaurant;
