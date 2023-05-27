const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js');
const OrderedProduct = require('./orderedProduct.js');

class Order extends Model {
  static associate(models) {
    Order.hasMany(OrderedProduct, {
      foreignKey: 'orderID',
      as: 'orderedProducts'
    });
  }

}

Order.init(
  {
    // Define the table columns
    orderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
      type: DataTypes.STRING,
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
    collectorStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Order', // The name of the model, which will be used as the table name
    timestamps: false,
  }
);

module.exports = Order;
