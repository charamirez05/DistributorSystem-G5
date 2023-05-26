const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js');

class User extends Model {}

User.init(
  {
    // Define the table columns
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Users', // The name of the model, which will be used as the table name
    timestamps: false,
  }
);

module.exports = User;
