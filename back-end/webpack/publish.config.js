'use strick';

const path = require('path');
const sourcePath = '../wwwroot/';
const bundlePath = '../wwwroot/dist/';

module.exports = {
  entry: [path.resolve(__dirname, sourcePath, 'js', 'index.js'), path.resolve(__dirname, sourcePath, 'js', 'test.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, bundlePath, 'js')
  }
};