const express = require('express');
const mysql = require('mysql');
const axios = require('axios');

const app = express();
const port = 3000; // or any other port you prefer
const cors = require('cors');
app.use(express.json());
app.use(cors());

// MySQL database connection configuration
/* const connection = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12619695',
  password: '2ANG8tNXa7',
  database: 'sql12619695',
});
 */

// Set up your API routes
app.post('/users', userController.createUser);
app.post('/orders', orderController.createOrder);
app.post('/products', productController.createProduct);
app.post('/orderedProduct', orderedProductController.createOrderedProduct);
app.get('/products/getAllProducts', productController.getAllProducts);
// Sync the database and start the server
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Database tables created');
  })
  .catch((error) => {
    console.error('Error creating database tables:', error);
  },
    {
      // Disabling createdAt and updatedAt fields
      timestamps: false,
    });


app.post('/users', async (req, res) => {
  try {
    //need ni tagsa'2 og initialize kay mo error if kausahaon like this: const { name } = req.body;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // Create a new user record
    const newUser = await User.create({ firstName, lastName });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/users', async (req, res) => {
  try {
    // Fetch all user records from the database
    const users = await User.findAll();

    res.status(200).json(users);
    
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user record
    await user.destroy();

    res.status(200).type('text').send('User deleted successfully');
    res.status(204).end();

  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});