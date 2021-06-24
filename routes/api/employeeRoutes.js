const router = require('express').Router();
const db = require('../../models');

router.get('/', async (req, res) => {
  const employees = await db.Employee.findAll({});
  return res.json(employees);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const employee = await db.Employee.findByPk(id);

  if (employee) {
    return res.status(200).json(employee);
  }
  return res.status(404).send('No employee found');
});

module.exports = router;