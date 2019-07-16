'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.TEXT,
  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};
