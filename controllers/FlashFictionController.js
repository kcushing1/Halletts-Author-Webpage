const db = require("../models");

module.exports = {
  //name : function(req,res){
  //db...
  // }
  test: function (req, res) {
    const stories = "stories list";
    res.send(stories);
  },
};
