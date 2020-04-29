const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: PATHS.src + '/index.js',
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  }
};