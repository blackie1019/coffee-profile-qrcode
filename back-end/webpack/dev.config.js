// dev.config.js
//const webpack = require('webpack');
const path = require('path');

const sourcePath = path.resolve(__dirname, '../wwwroot');
const publicPath = `${sourcePath}/dist/`;

module.exports  = {
  //程序入口.
	entry: [
		`${sourcePath}/js/index.jsx`
	],
	output: {
		filename: 'bundle.js',
		path: `${publicPath}/js/`
	},
  // webpack 的主目录.
	context: __dirname,
	devServer: {
		contentBase: publicPath,
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				use: [{ loader: 'babel-loader' }],
				exclude: /node_modules/
			}
		]
	}
};
