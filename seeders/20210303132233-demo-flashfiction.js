"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "FlashFictions",
      [
        {
          title: "story 1",
          text: "one upon a time",
          image: "./images/thumbnails/bread_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "story 2",
          text: "it was a dark and stormy night",
          image: "./images/thumbnails/bread2_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "story 3",
          text: "one fish two fish red fish blue fish",
          image: "./images/thumbnails/bread3_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "story 4",
          text: "a long, long time ago in a galaxy far, far away...",
          image: "./images/thumbnails/bread_tn.jpg",
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
