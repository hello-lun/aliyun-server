const mysql = require("mysql")
const DBConfig = require('../config/db.conf');

const pool = mysql.createPool(DBConfig);//数据库连接配置

function query(sql, callback, next){
  pool.getConnection(function(err,connection){
    connection.query(sql, function (err,rows) {
      if (err) next && next(err);
      else {
        callback(err,rows);
        connection.release();
      }
    });
  });
}

module.exports = query;