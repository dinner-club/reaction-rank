const nodeExternals = require("webpack-node-externals");
const slsw = require("serverless-webpack");

module.exports = {
  externals: [nodeExternals()],
  mode: "development",
  entry: slsw.lib.entries
};
