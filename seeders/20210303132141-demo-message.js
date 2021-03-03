"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Messages",
      [
        {
          name: "John Doe",
          email: "john@hi.com",
          text: "this is test 1 john doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Deer",
          email: "jane@hi.com",
          text: "this is test 2 jane deer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Messages", null, {});
  },
};
