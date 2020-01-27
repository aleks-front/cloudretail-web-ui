const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      { test: /\.(ts|tsx)$/, use: 'ts-loader' },
    ],
  },
  performance: {
    maxAssetSize: 256 * 1024,
    maxEntrypointSize: 512 * 1024,
  },
  stats: {
    children: false,
    modules: false,
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    stats: {
      children: false,
      modules: false,
    },
  },
};
