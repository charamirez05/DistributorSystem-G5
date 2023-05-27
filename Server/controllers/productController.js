const Product = require('../models/Product');

// Example API endpoint
const createProduct = async (req, res) => {
  try {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productUnit = req.body.productUnit;
    const commissionRate = req.body.commissionRate;


    const product = await Product.create({ productName, productPrice, productUnit, commissionRate});
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createProduct, getAllProducts,
};
