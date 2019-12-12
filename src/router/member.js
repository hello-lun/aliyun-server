const express = require('express');
const Models = require('../../models');

const router = express.Router();

router.get('/list', async(req, res) => {
  res.json({
    list: []
  });
});

router.get('/pageList', async(req, res) => {
  let member = await Models.Members.findAll();
  res.send({data: member});
});

router.get('/add-member', async(req, res) => {
  let {name, password} = req.query;

  let members = await Models.Members.create({
    name, password
  });

  res.status(200).json({
    succeed: true,
    data: members
  });
});

router.get('/get-member', async(req, res) => {
  let {name} = req.query;
  let member = await Models.Members.findAll({
    where: {name}
  });

  res.send({list: member});
});

router.get('/login', async(req, res) => {
  let {name, password} = req.query;

  if (!name) {
    return res.status(400).json({
      error: 'Missing 用户名'
    })
  }
  if (!password) {
    return res.status(400).json({
      error: 'Missing 密码'
    })
  }

  let member = await Models.Members.findAll({
    where: {name}
  });

  if (member) {
    if (password === member.password) {
      res.status(200).json({
        succeed: true
      });
    } else {
      return res.status(400).json({
        error: '密码错误！',
        succeed: false
      });
    }
  } else {
    return res.status(400).json({
      error: '不存在该用户！',
      succeed: false
    });
  }
});

router.get('/registered', async(req, res) => {
  let {name, password} = req.query;

  if (!name) {
    return res.status(400).json({
      error: 'Missing 用户名'
    })
  }
  if (!password) {
    return res.status(400).json({
      error: 'Missing 密码'
    })
  }
  
  let member = await Models.Members.findAll({
    where: {name}
  });

  if (member) {
    return res.status(400).json({
      error: '已经存在该用户！',
      succeed: false
    });
  }

  Models.Members.create({
    name, password
  });
});


module.exports = router;