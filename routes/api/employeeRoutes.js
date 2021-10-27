const router = require('express').Router();
const controller = require('../../controllers/employee');

router.get('/', controller.getAllEmployees);
router.get('/:id', controller.getEmployeeById);

module.exports = router;