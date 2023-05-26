const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js');
const OrderedProduct = require('./orderedProduct.js');

class Product extends Model {
  static associate(models) {
    Product.hasMany(OrderedProduct, {
      foreignKey: 'productID',
      as: 'orderedProducts'
    });
  }

  async addOrderedProduct(orderedProduct) {
    await this.createOrderedProduct(orderedProduct); // Use the generated Sequelize method to create an ordered product
  }
}

Product.init(
  {
    // Define the table columns
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productUnit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    commissionRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Products', // The name of the model, which will be used as the table name
    timestamps: false,
  }
);

module.exports = Product;
