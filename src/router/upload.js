const express = require('express');
const multer = require("multer");
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  //存储的位置
  destination(req, file, cb){
    cb(null, path.join(__dirname, '../../assets/imgs'))
  },
  //文件名字的确定 multer默认帮我们取一个没有扩展名的文件名，因此需要我们自己定义
  filename(req, file, cb){
    cb(null, Date.now() + file.originalname)
  }
})

let upload = multer({ storage });

router.post('/uploads', upload.single('files'), function (req, res, next) {
  res.json({
    success: true,
    src: '/imgs/' + req.file.filename
  });
});

module.exports = router;