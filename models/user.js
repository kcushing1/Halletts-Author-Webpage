"use strict";
const { triggerAsyncId } = require("async_hooks");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
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
          is: /^([a-zA-Z0-9 _-]+)$/i,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.prototype.validPassword = function (password) {
    return password === this.password;
  };

  return User;
};
