// set up express
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

// set up mongoose
const db = require('./config/mongoose')
db.once('open', () => {
  console.log('connected to database')
})
db.on('error', err => console.log(err))

// define middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// define api routes here
require("./routes/apiRoutes")(app)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`now listening on localhost://${PORT}`)
})