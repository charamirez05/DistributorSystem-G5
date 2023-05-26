const express = require('express');
const cors = require('cors');


const sequelize = require('./config');
const orderController = require('./controllers/orderController');
const productController = require('./controllers/productController');
const orderedProductController = require('./controllers/orderedProductController');


const app = express();
app.use(express.json());

app.use(cors());


// Set up your API routes
app.post('/orders', orderController.createOrder);
app.post('/products', productController.createProduct);
app.post('/orderedProduct', orderedProductController.createOrderedProduct);
app.get('/products/getAllProducts', productController.getAllProducts);


// Sync the database and start the server
sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
