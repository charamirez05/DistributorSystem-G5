const Order = require('../models/Order');
const OrderedProduct = require('../models/orderedProduct')
const Product = require('../models/Product')

const createOrder = async (req, res) => {
  try {
    const distributionDate = req.body.distributionDate;
    const orderDate = req.body.orderDate;
    const penaltyRate = req.body.penaltyRate;
    const paymentTerms = req.body.paymentTerms;
    const collectorStatus = req.body.collectorStatus;

    const orderedProducts = req.body.orderedProducts;

    const order = await Order.create({ distributionDate, orderDate, penaltyRate, paymentTerms});

    const orderID = order.orderID;

    let orderAmount = 0;

    for (const productInfo of orderedProducts) {
      const productID = productInfo && productInfo.productID;
      const quantity = productInfo && productInfo.quantity;
      
      const product = await Product.findByPk(productID);

      if (product) {
        const productPrice = product.productPrice;
        const productUnit = product.productUnit;
        const commissionRate = product.commissionRate;
        const subTotal = productPrice * quantity;
    
        const orderedProduct = await OrderedProduct.create({
          productID,
          quantity,
          subTotal,
          orderID,
        });
        
        orderAmount += subTotal; 
      }
    }
    
    const updatedOrder= await Order.update({ orderAmount: orderAmount }, { where: { orderID: orderID } });
    res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    
    res.json(orders);
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createOrder, getAllOrders
};
