module.exports = function (sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    email: DataTypes.STRING,
    //validate email
    text: {
      type: DataTypes.STRING,
      validate: {
        len: [1],
      },
    },
  });
  return Message;
};
