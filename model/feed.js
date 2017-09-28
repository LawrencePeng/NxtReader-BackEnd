const db = require('../util/db')
const validate = require('mongoose-validator')

const Feed = db.Schema({
  url: {type: String, required: true},
  desc: String,
  type: String,
})

module.exports = exports = db.Model()