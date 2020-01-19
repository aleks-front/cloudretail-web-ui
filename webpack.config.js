const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  stats: {
    children: false,
    modules: false
  },
  devServer: {
    stats: {
      children: false,
      modules: false
    }
  }
};
