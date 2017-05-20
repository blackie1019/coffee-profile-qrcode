// dev.config.js
//const webpack = require('webpack');
const path = require('path');

const sourcePath = path.resolve(__dirname, '../wwwroot');
const publicPath = `${sourcePath}/dist/`;

const config = {
  //程序入口.
	entry: [
		`${sourcePath}/js/index.js`
	],
	output: {
		filename: 'bundle.js',
		path: `${publicPath}/js/`
	},
  // webpack 的主目录.
	context: __dirname,
	devServer: {
    // 静态文件位置
		contentBase: publicPath,
	},
	module: {
		rules: [
      //配置 js 后缀的文件，应该采用哪种加载器.
			{
				test: /\.js$/,
				use: [{ loader: 'babel-loader' }],
				exclude: /node_modules/
			}
		]
	}
};
//模块导出
module.exports = config;