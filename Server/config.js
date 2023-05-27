const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('sql12619695', 'sql12619695', '2ANG8tNXa7', {
  host: 'sql12.freemysqlhosting.net',
  dialect: 'mysql',
});

module.exports = sequelize;
