const db = require('../models');

module.exports = {
  getAllEmployees: async (req, res) => {
    const employees = await db.Employee.findAll({});
    return res.json(employees);
  }, 
  getEmployeeById: async (req, res) => {
    const { id } = req.params;
    const employee = await db.Employee.findByPk(id);
  
    if (employee) {
      return res.status(200).json(employee);
    }
    return res.status(404).send('No employee found');
  }
};