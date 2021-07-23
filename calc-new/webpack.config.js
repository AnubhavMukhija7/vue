module.exports = {
  entry: './src/main.ts',
  output: {
    filename: './public/main.js',
  },
  resolve: {
    extensions: ['', '.webpack.js', '.ts', '.js'],
  },
  module: {
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
};
