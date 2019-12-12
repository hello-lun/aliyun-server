
const express = require('express');
const router = express.Router();

const Models = require('../../models');

router.get('/add-user', async (req, res) => {
  let {name} = req.query;
  if(!name) next('请填写名称');

  let user = await Models.User.create({
    name
  });

  res.json({
    user
  });
});

module.exports = router;
