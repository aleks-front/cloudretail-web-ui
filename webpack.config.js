const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      meta: { build_time: new Date().toISOString() },
    }),
  ],
  module: {
    rules: [{ test: /\.(ts|tsx)$/, use: 'ts-loader' }],
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
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    stats: {
      children: false,
      modules: false,
    },
  },
};
