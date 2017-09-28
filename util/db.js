const mongoose = require( 'mongoose' )
const parseCfg = require("../util/config")

const config = parseCfg("../config/conf.json")
const dbConfig = config['db']
const {location, path, user, password} = dbConfig

// Build the connection string
const dbURI = `mongodb://${location}${path}`

mongoose.connect(dbURI);

// Bind Handlers
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI)
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err)
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected')
});


process.on('SIGINT', () => {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination')
    process.exit(0);
  });
});

module.exports = exports = mongoose