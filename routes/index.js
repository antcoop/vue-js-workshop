const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  const file = path.join(__dirname, '../index.html');
  return res.sendFile(file);
});

module.exports = router;