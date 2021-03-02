module.exports = function (sequelize, DataTypes) {
  let FlashFiction = sequelize.define(
    "FlashFiction",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      image: DataTypes.STRING,
    },
    { freezeTableName: true }
  );
  return FlashFiction;
};
