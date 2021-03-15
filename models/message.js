"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  Message.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 500],
        },
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
