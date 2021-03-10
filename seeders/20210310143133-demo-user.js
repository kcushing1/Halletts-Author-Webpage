"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "KaseyAdmin",
          password: "SecurePa55",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "testing123",
          password: "Testing123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("User", null, {});
  },
};
