"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  FlashFiction.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150],
        },
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 3500],
        },
      },
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "FlashFiction",
    }
  );
  return FlashFiction;
};
