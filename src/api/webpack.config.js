const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { NODE_ENV = 'development' } = process.env;

module.exports = {
  entry: './src/api/Index.ts',
  mode: NODE_ENV,
  target: 'node',
  devServer: {
    port: 3000,
},
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  },
  externals: [ nodeExternals() ],
}