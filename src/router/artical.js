const express = require('express');
const dayjs = require('dayjs');
const Models = require('../../db/models');

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

router.post('/edit-artical', async (req, res, next) => {
  let {title, content, read, link, cover, desc, id} = req.body;
  // let createTime = dayjs(+new Date()).format('YYYY-MM-DD HH:mm');

  let artical = await Models.articals.update({
    title, content, read, link, cover, desc
  },{
    where: { id }
  });

  res.status(200).json({
    succeed: true,
    data: artical
  });
});

router.get('/delete-artical', async (req, res, next) => {
  let { id } = req.query;
  let artical = await Models.articals.destroy({
    where: { id }
  });

  res.status(200).json({
    succeed: true,
    data: artical
  });
});

router.get('/getArticalById', async (req, res, next) => {
  var { id } = req.query;

  let articalItem = await Models.articals.findOne({
    where: {id}
  });
  

  res.status(200).json({
    succeed: true,
    data: articalItem
  });
});

router.get('/list', async (req, res, next) => {
  let { page, limit } = req.query;
  limit = Number(limit) || 10;
  page = Number(page) || 1;
  let offset = (page - 1) * limit;

  try {
    let articalList = await Models.articals.findAndCountAll({
      limit,
      offset,
    });
    res.status(200).json({
      succeed: true,
      count: articalList.count,
      list: articalList.rows
    });
  } catch (err) {
    next(err);
  }

});


module.exports = router;