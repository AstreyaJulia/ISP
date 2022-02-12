const path = require('path')

module.exports = {
  entry: [
    "./src/assets/js/app.js"
  ],
  output: {
    path: path.resolve(__dirname, '.assets/js/'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
