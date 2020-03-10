const path = require("path");

module.exports = {
  dbUrl: "mongodb+srv://Admin:s6EYgC4gWcY2QVV@cluster0-yqskx.mongodb.net/test?retryWrites=true&w=majority",
  cert: path.join(__dirname, "../ssl/local.crt"),
  key: path.join(__dirname, "../ssl/local.key"),
  portHttp: 3000,
  portHttps: 3001
};
