const db = require("../models");
const FlashFiction = db.flashfictions;

module.exports = {
  //get all
  findAll: (req, res) => {
    db.FlashFiction.findAll({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  },

  //post new story
  create: (req, res) => {
    let story = req.body;
    db.FlashFiction.create({
      title: story.title,
      text: story.text,
      image: story.image,
    })
      .then((newStory) => {
        res.json(newStory);
      })
      .catch((err) => {
        console.log("error is: ", err);
      });
  },

  //edit BONUS

  //search one BONUS
  findOne: (req, res) => {
    db.FlashFiction.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((findStory) => {
        res.json(findStory);
      })
      .catch((err) => console.log("error is: ", err));
  },

  //delete story BONUS
  delete: (req, res) => {
    db.FlashFiction.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deleteStory) => {
        console.log("the story has been deleted :(");
        res.json(deleteStory);
      })
      .catch((err) => console.log("error is: ", err));
  },
};
