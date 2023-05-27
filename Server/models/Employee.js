const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js');
const Order = require('./Order.js');

class Employee extends Model {
  static associate(models) {
    Employee.hasMany(Order, {
      foreignKey: 'employeeID',
      as: 'order'
    });
  }
}

Employee.init(
  {
    // Define the table columns
    employeeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employeeFName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeMName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeLName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeBDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeCuAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeePeAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeContactNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeGender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCashier: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isSalesAssociate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isCollector: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Employee', // The name of the model, which will be used as the table name
    timestamps: false,
  }
);

module.exports = Employee;
