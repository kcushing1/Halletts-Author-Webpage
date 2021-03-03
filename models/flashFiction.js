'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FlashFiction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FlashFiction.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FlashFiction',
  });
  return FlashFiction;
};