"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "FlashFictions",
      [
        {
          title: "Animal Crackers",
          text:
            "Buddy is walking animal crackers across the sandwich board set in front of Billie, occasionally adding small noises that are almost entirely incorrect. Billie laughs just at the prospect of it all, her whole face gleaming like a sparkler as she anticipates Buddy's next experimental sounds. After each attempt she waits patiently for the cracker to be placed in her minuscule palm, then corrects Buddy with her own garbled versions. Her babbles are cheerful, pitched high and enthusiastic each time. Only once she is satisfied will Billie eat a bite of the sweet cracker before passing it to Buddy to consume the rest. He dips one of the crackers in my tea and Billie watches curiously when he tells her it makes them taste even better. She is still not a particularly verbal child but her face is expressive enough to challenge his assertion without words. The small grabbing motions she makes with her fist are quite clear; she does not believe it but insists on trying this new version of animal cracker anyway.",
          image: "./images/thumbnails/gree0_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tea and Crackers",
          text:
            "Billie very carefully dips a buffalo with one hand and a seal with the other when Buddy passes her my teacup, sliding it a little way across the table so she can reach. She leaves the crackers in long enough that bits of them dissolve and crumble off in the hot liquid. I do not prefer my tea with starchy chunks in it, the same way I do not dip cookies in milk. Or at least I didn't until I met Buddy. But I would do absolutely anything to hear Billie's charmed giggle and see Buddy smile like that. So now it seems I am a man who drinks his tea with animal cracker crumbs in it. Though I suppose that will only be the case if I manage to get my teacup back.He dips one of the crackers in my tea and Billie watches curiously when he tells her it makes them taste even better. She is still not a particularly verbal child but her face is expressive enough to challenge his assertion without words. The small grabbing motions she makes with her fist are quite clear; she does not believe it but insists on trying this new version of animal cracker anyway.",
          image: "./images/thumbnails/gree1_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "After School",
          text:
            "The boys are at a friend's house and will not need to be collected until after dinner. Billie is right here, content with Buddy's attention. Lina said hello when she got off the bus and then went straight up to her room. I reflexively check the clock atop the stove; that was more than half an hour ago. Not particularly long, but long enough that a growing teen with a consistent demand for snacks should have stopped by the kitchen. He dips one of the crackers in my tea and Billie watches curiously when he tells her it makes them taste even better. She is still not a particularly verbal child but her face is expressive enough to challenge his assertion without words. The small grabbing motions she makes with her fist are quite clear; she does not believe it but insists on trying this new version of animal cracker anyway.",
          image: "./images/thumbnails/gree3_tn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Buffalo",
          text:
            "There once was a buffalo who loved to roam the wild. This fella lived in Yellowstone and would sometimes charge tourists's cars just because he could. He wasn't a mean buffalo, nor a nice one. He was neither a great big chonk, nor a skinny lean bugger. He sometimes ran but was also a tad on the lazy side of Yellowstone buffalo, so usually he would just watch other buffalo run. Sometimes they would run and run and run right out of sight. He didn't mind. They always came back. And if they didn't, he would find other buffalo to roam with, over the mountains, across the plains, cross the cracked paved roads that humans too often strayed from. And sometimes, while he roamed, he would stop and take a nap. He loved naps.",
          image: "./images/thumbnails/gree4_tn.jpg",
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
