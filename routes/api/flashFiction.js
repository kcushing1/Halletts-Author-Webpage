//POST from admin
//GET to public

const db = require("../../models")

module.exports function (app) {
  //get all flash fiction
  app.get("/api/flashfiction", (req,res) =>{
    //db.FlashFiction.findAll({})
    // .then((story) => {
    //   res.json(story)
    // })
    res.send("get all flash fiction")
  })

  //post new story
  app.post("/api/flashfiction", (req,res) => {
    let story = req.body
    console.log(story)
  })
}