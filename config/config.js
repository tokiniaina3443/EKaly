// set env.
var env = (process.env.NODE_ENV = "development");
// configure environment
var config = require("./config.json");
var envConfig = config[env];
// add configuration to process
for (var key in envConfig) {
  process.env[key] = envConfig[key];
}
