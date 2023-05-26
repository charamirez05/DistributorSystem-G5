const User = require('../models/User');

// Example API endpoint
const createUser = async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const user = await User.create({ firstName, lastName});
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createUser,
};
