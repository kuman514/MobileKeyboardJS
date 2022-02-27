module.exports = {
  entry: './js/index.js',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: 'production'
};
