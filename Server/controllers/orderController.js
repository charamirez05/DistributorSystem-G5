const Order = require('../models/Order');

// Example API endpoint
const createOrder = async (req, res) => {
  try {
    const distributionDate = req.body.distributionDate;
    const penaltyRate = req.body.penaltyRate;
    const paymentTerms = req.body.paymentTerms;
    const order = await Order.create({ distributionDate, penaltyRate, paymentTerms});
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createOrder,
};
