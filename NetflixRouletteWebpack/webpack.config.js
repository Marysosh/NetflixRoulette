const serverConfig = require("./webpack.server");
const clientConfig =
  process.env.NODE_ENV === "development"
    ? require("./webpack.dev")
    : require("./webpack.prod");

module.exports = [clientConfig, serverConfig];
