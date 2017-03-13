module.exports = {
  entry: "./lib/server.js",
  output: {
    filename: "bundle.js"
  },
  node: {
  fs: "empty"
},
  target: 'node'
}
