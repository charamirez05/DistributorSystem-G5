const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js');
const OrderedProduct = require('./orderedProduct.js');
const Employee = require('./Employee.js');
const Dealer= require('./Dealer.js')

class Order extends Model {
  static associate(models) {
    Order.hasMany(OrderedProduct, {
      foreignKey: 'orderID',
      as: 'orderedProducts'
    });
    Order.belongsTo(Employee, {foreignKey: 'employeeID',
        as: 'employee'}); 

    Order.belongsTo(Dealer,{foreignKey:'dealerID', 
    as:'dealer'
  });
  }
}

Order.init(
  {
    // Define the table columns
    orderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distributionDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    penaltyRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentTerms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    collectorID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Employees',
        key: 'employeeID',
      },
      allowNull: true,
    },
    dealerID:{
      type:DataTypes.INTEGER,
      references:{
        model:'Dealers',
        key:'dealerID',
      },
      allowNull: true,
    },
     //collector nalang ni tapos if null kay meaning ana wala pa siya na assignnan og collector
  },
  {
    sequelize,
    modelName: 'Order', // The name of the model, which will be used as the table name
    timestamps: false,
  }
);

module.exports = Order;
