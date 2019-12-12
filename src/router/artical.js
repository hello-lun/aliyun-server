const express = require('express');
const dayjs = require('dayjs');
const Models = require('../../models');

const router = express.Router();
router.post('/add-artical', async (req, res, next) => {
  let {title, content, read, link, cover, desc} = req.body;
  let createTime = dayjs(+new Date()).format('YYYY-MM-DD HH:mm');

  let artical = await Models.articals.create({
    title, content, read, link, cover, desc, createTime
  });
  res.status(200).json({
    succeed: true,
    data: artical
  });
});

router.get('/getArticalById', async (req, res, next) => {
  var { id } = req.query;

  let articalItem = await Models.articals.findAll({
    where: {id}
  });

  res.status(200).json({
    succeed: true,
    data: articalItem[0]
  });
});

router.get('/list', async (req, res, next) => {
  let articalList = await Models.articals.findAll();
  
  res.status(200).json({
    succeed: true,
    list: articalList
  });
});


module.exports = router;