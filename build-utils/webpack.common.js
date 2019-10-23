const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Make sure react-hot-loader is required before react and react-dom.
  // https://github.com/gaearon/react-hot-loader#getting-started
  entry: ['react-hot-loader/patch', './src/index.js'],
  resolve: {
    // Provide `src` for aliases which support absolute import.
    modules: ['node_modules', 'src'],
    // Enable `import` without extension.
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: ['*', '.js', '.jsx'],
    // Aliases
    alias: {
      // Support React Hook.
      // https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom
      'react-dom': '@hot-loader/react-dom',
      // Absolute Imports, need to be set to an absolute path.
      app: path.resolve('src/app'),
    },
  },
  module: {
    rules: [
      {
        // Do linting by eslint and then transpiling by babel for Javascript files.
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        // First collecting css files and generating string. (css-loader)
        // Then take the generated string and put it in style tag in the HTML page. (style-loader)
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true,
            },
          },
        ],
      },
      {
        // https://webpack.js.org/guides/asset-management/#loading-images
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        // https://webpack.js.org/guides/asset-management/#loading-fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    // Remove/Clean build folder.
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(),
    // Create HTML files for bundles.
    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'React Template App',
      template: './src/index.html',
    }),
  ],
  output: {
    // This path need to be an absolute path.
    path: path.resolve('dist'),
    publicPath: '/',
  },
};
