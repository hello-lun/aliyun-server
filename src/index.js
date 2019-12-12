const express = require('express');
const useRouter = require('./router');
const errorMiddleware = require('./middleware/error');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../assets')));

// 注册路由
useRouter(app);

// 错误处理的中间件
app.use(errorMiddleware);

app.listen(3389, () => {
  console.log('express服务打开成功');
});