const fs = require('fs');
const path = require('path');

const memberRouter = require('./member');
const articalRouter = require('./artical');
const uploadRouter = require('./upload');
const userRouter = require('./user');

function useRouter(app) {
  app.use('/index.html',function(req,res){
    let filePath = path.resolve(__dirname, '../../index.html')
    fs.readFile(filePath,function(err,data){  
      if(err)
        console.log("对不起，您所访问的路径出错", err);
      else {
        res.end(data);
      }
    })
  });

  app.use('/api/user', userRouter);
  app.use('/api/member', memberRouter);
  app.use('/api/article', articalRouter);
  app.use('/api', uploadRouter);

  // 捕获404并定向到错误处理
  app.use(function(req, res, next) {
    var err = new Error('404 Not Found');
    err.status = 404;
    res.status(400);
    next(err);
  });
}

module.exports = useRouter;