const db = require("../models")

module.exports = function (app) {
  app.get("/api/test", (req, res) => {
    res.json({ message: "connected" })
  })
}
