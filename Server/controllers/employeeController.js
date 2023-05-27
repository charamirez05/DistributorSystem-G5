const Employee = require('../models/Employee');

// Example API endpoint
const createEmployee = async (req, res) => {
  try {
    const employeeFName = req.body.employeeFName;
    const employeeMName = req.body.employeeMName;
    const employeeLName = req.body.employeeLName;
    const employeeBDate = req.body.employeeBDate;
    const employeeCuAddress = req.body.employeeCuAddress;
    const employeePeAddress = req.body.employeePeAddress;
    const employeeContactNumber = req.body.employeeContactNumber;
    const employeeGender = req.body.employeeGender;
    const isCashier = req.body.isCashier;
    const isSalesAssociate = req.body.isSalesAssociate;
    const isCollector = req.body.isCollector;



    const employee = await Employee.create({ employeeFName, employeeMName, employeeLName, employeeBDate, employeeCuAddress, employeePeAddress, employeeContactNumber, employeeGender, isCashier, isSalesAssociate, isCollector});
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();

    res.json(employees);
  } catch (error) {
    console.error('Error retrieving employees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllCollectors = async (req, res) => {
    try {
      const collectors = await Employee.findAll({
        where: {
            isCollector: true
        }
      });
  
      res.json(collectors);
    } catch (error) {
      console.error('Error retrieving collectors:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

const getCollectorByID = async (req, res) => {
    try {
      const collector = await Employee.findOne({
        where: {
            isCollector: true,
            employeeID: req.params.employeeID
        }
      });
  
      res.json(collector);
    } catch (error) {
      console.error('Error retrieving collectors:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    createEmployee, getAllEmployees, getAllCollectors, getCollectorByID
};
