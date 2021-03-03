const db = require("../models");
const Message = db.messages;

module.exports = {
  test: function (req, res) {
    const message = "message list";
    res.send(message);
  },

  //post message
  create: (req, res) => {
    let message = req.body;
    db.Message.create({
      name: message.name,
      email: message.email,
      text: message.text,
    })
      .then((newMessage) => {
        res.json(newMessage);
      })
      .catch((err) => {
        console.log("error is: ", err);
      });
  },

  //get one message
  findOne: (req, res) => {
    db.Message.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((findMessage) => {
        res.json(findMessage);
      })
      .catch((err) => console.log("error is: ", err));
  },

  //get all messages
  findAll: (req, res) => {
    db.Message.findAll({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  },

  //delete messages
  delete: (req, res) => {
    db.Message.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deleteStory) => {
        console.log("the message has been deleted");
        res.json(deleteStory);
      })
      .catch((err) => console.log("error is: ", err));
  },
};
