'use strict';
module.exports = (sequelize, DataTypes) => {
  const articals = sequelize.define('articals', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    read: DataTypes.STRING,
    link: DataTypes.STRING,
    createTime: DataTypes.STRING,
    desc: DataTypes.STRING,
    cover: DataTypes.STRING,
    key: DataTypes.STRING
  }, {});
  articals.associate = function(models) {
    // associations can be defined here
  };
  return articals;
};