module.exports = {
  entry: './src/scripts.js',
  output: {
      path: __dirname + "/public/js",
      filename: "build.js"
    },
  watch: true
}
