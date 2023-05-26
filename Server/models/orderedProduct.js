const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js');
const Product = require('./Product.js');
const Order = require('./Order.js');

class OrderedProduct extends Model {
    static associate(models) {
        OrderedProduct.belongsTo(Product, {foreignKey: 'productID',
        as: 'product'}); 
        OrderedProduct.belongsTo(Order, {foreignKey: 'orderID',
        as: 'order'}); 
      } 

}

OrderedProduct.init(
  {
    // Define the table columns
    orderedProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subTotal: {
      type: DataTypes.DOUBLE,
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTotal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'productID',
      },
      allowNull: false,
    },
    orderID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'orderID',
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'OrderedProduct',
    timestamps: false,
  }
);

module.exports = OrderedProduct;
