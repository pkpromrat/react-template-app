const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development',
    }),
  ],
  output: {
    filename: 'bundle.[hash].js',
  },
  devServer: {
    contentBase: './dist',
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    hot: true,
  },
};
