const mongoose = require('mongoose')

const database = 'group_evaluation'

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${database}`

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

module.exports = db