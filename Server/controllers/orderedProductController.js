
const OrderedProduct = require('../models/orderedProduct');
const Product = require('../models/Product');
const Order = require('../models/Order');

const createOrderedProduct = async (req, res) => {
  try {
    const quantity = req.body.quantity;
    const subTotal = req.body.subTotal;
    const productID = req.body.productID;
    const orderID = req.body.orderID;

    const orderedProduct = await OrderedProduct.create({ quantity, subTotal, productID, orderID });

    const product = await Product.findByPk(this.productID);
    if (product) {
      await orderedProduct(product);
    }

    const order = await Order.findByPk(this.orderID);
    if (order) {
      await orderedProduct(order);
    }

    res.json(orderedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createOrderedProduct,
};
