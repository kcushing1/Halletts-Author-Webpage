"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "FlashFictions",
      [
        {
          title: "Crackers",
          text:
            "Buddy is walking animal crackers across the sandwich board set in front of Billie, occasionally adding small noises that are almost entirely incorrect. Billie laughs just at the prospect of it all, her whole face gleaming.",
          image: "./images/thumbnails/gree0_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tea",
          text:
            "She's like a sparkler as she anticipates Buddy's next experimental sounds. After each attempt she waits patiently for the cracker to be placed in her minuscule palm, then corrects Buddy with her own garbled versions.",
          image: "./images/thumbnails/gree1_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "School",
          text:
            "He dips one of the crackers in my tea and Billie watches curiously when he tells her it makes them taste even better. She is still not a particularly verbal child but her face is expressive enough to challenge his assertion without words.",
          image: "./images/thumbnails/gree3_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Buffalo",
          text:
            "The small grabbing motions she makes with her fist are quite clear; she does not believe it but insists on trying this new version of animal cracker anyway.",
          image: "./images/thumbnails/gree3_tn.jpg",
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
