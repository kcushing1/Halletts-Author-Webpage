"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Messages",
      [
        {
          name: "John Doe",
          email: "john@hi.com",
          text:
            "Such a fan! I love your Animal Crackers story and look forward to your future works!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Deer",
          email: "jane@hi.com",
          text:
            "Hi Hallett! If you're interested in self-publishing, I manage a small publishing company that works with many authors just like you! I would love to connect and talk more!",
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
