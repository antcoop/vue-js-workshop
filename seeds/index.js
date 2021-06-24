const Fakerator = require("fakerator");
const fakerator = Fakerator("en-US");
const db = require('../models');

db.sequelize.sync({ force: true }).then(async () => {
  for (var i = 0; i < 10; i++) {
    const user = await db.Employee.create(fakerator.entity.user());
  }
});
