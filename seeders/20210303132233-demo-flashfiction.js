"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "FlashFictions",
      [
        {
          title: "story 1",
          text: "one upon a time",
          image: "scr string",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "story 2",
          text: "it was a dark and stormy night",
          image: "src insert here",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("FlashFictions", null, {});
  },
};
