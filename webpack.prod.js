// const {merge} = require('webpack-merge');
// const common = require('./webpack.common');

// module.exports = merge(common, {
//   mode: 'production',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env']
//             }
//           }
//         ]
//       }
//     ]
//   }
// });


const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  
  // Ensure the correct output directory is set
  output: {
    path: path.resolve(__dirname, 'dist'),  // Set the output folder (you can change 'dist' to any name you prefer)
    filename: '[name].[contenthash].js',   // Ensure unique filenames with content hashes
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      // You can also add CSS handling here if needed, e.g., css-loader and style-loader
    ],
  },

  plugins: [
    // If you're using HTML Webpack Plugin, include it here
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',  // Path to your HTML template
    // }),
  ],

  // You can also configure optimization if needed
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
