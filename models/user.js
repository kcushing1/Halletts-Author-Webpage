"use strict";
const { triggerAsyncId } = require("async_hooks");
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [5, 40],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 86],
          //is: /^([a-zA-Z0-9 _-]+)$/i,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};
