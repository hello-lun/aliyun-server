'use strict';
module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Members.associate = function(models) {
    // associations can be defined here
  };
  return Members;
};