const path = require('path');
// There's a new line below this one!
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {                 // new line
    contentBase: './dist'      // new line
  },                           // new line
  devtool: 'eval-source-map',  // new line
  // The plugins key below this line is also new!
  plugins: [
    new CleanWebpackPlugin(), // new line
    new HtmlWebpackPlugin({
      title: 'Shape Tracker',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};