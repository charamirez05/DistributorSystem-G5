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
  
  async addOrderedProduct(orderedProduct) {
    await this.createOrderedProduct(orderedProduct); // Use the generated Sequelize method to create an ordered product
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
    distributionDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    penaltyRate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentTerms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Orders', // The name of the model, which will be used as the table name
    timestamps: false,
  }
);

module.exports = Order;
//random